import React, { Component } from 'react';
import axios from 'axios';
import { error, symbols, getMarketSymbol, getMarketMessage, Loading } from '../../utility';
import { ViewMoreButton } from '../buttons';

const list = {
  overflowX: 'none',
  margin: '0',
  padding: '25px',
  color: '#fff',
  backgroundColor: '#000',
  textAlign: 'center',
};

const card = {
  display: 'inline-block',
  margin: '1.35em',
  padding: '25px',
  minWidth: '240px',
  maxWidth: '100%',
  color: '#000',
  backgroundColor: '#fff',
  borderRadius: '5%',
};

class StockChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stocks: [],
    };
  }

  componentWillMount() {
    console.clear();
    console.time('Fetching stocks');
    axios.get(
      `https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env.REACT_APP_STOCK_API_KEY}&symbols=${symbols}&types=quote,news`
    )
    .then(response => {
      let stocksObj = response.data;
      let stocksArr = Object.values(stocksObj);
      let stocks = stocksArr;
      this.setState({ 
        stocks: stocks,
        isLoaded: true,
      });
      console.timeEnd('Fetching stocks');
      console.log({ stocks }, response.status);
    })
    .catch(error());
  }

  render() {
    const { error, isLoaded, stocks } = this.state;
    if (error) {
      return (<div>Error: error.message</div>);
    } else if (!isLoaded) {
      return (<Loading />)
    } else {
      return (
        <div style={list}>
          <h1 style={{textAlign: 'center'}}>
            {getMarketSymbol(stocks[0].quote.calculationPrice)}
          </h1>
          <h2>
            {getMarketMessage(stocks[0].quote.calculationPrice)}
          </h2>
          <br/>
          {stocks.splice(0, 7).map(stock => (
            <div key={stock.quote.symbol} stock={stock} style={card}>
              <p>{stock.quote.companyName}</p>
              <h1>{stock.quote.symbol}</h1>
              <h3>${stock.quote.latestPrice}</h3>
              <p>High: ${stock.quote.week52High}</p>
              <p>Low: ${stock.quote.week52Low}</p>
            </div>
          ))}
          <ViewMoreButton />
        </div>
      );
    }
  }
};

export default StockChart;