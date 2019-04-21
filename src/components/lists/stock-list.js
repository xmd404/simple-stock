import React, { Component } from 'react';
import axios from 'axios';
import { error, symbols, getMarketStatus } from '../../utility';

const ListStyle = {
  overflowX: 'none',
  margin: '0',
  padding: '45px 25px',
};

const stockstyle = {
  display: 'inline-block',
  margin: '0',
  minWidth: '240px',
  maxWidth: '100%',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
};

class StockList extends Component {
  constructor(props){
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
      return <div>Stock list is Loading...</div>;
    } else {
      return (
        <div style={ListStyle}>
          <h2 style={{textAlign: 'center'}}>
            {getMarketStatus(stocks[0].quote.calculationPrice)}
          </h2>
          <br /><br />
          {stocks.map(stock => (
            <div key={stock.quote.symbol} stock={stock} style={stockstyle}>
              <hr/>
              <p>{stock.quote.companyName}</p>
              <h1>{stock.quote.symbol}</h1>
              <h3>${stock.quote.latestPrice}</h3>
              <p>High: ${stock.quote.week52High}</p>
              <p>Low: ${stock.quote.week52Low}</p>
            </div>
          ))}
        </div>
      );
    }
  }
};

export default StockList;