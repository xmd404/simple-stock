import React, { Component } from 'react';
import axios from 'axios';
import { error } from '../../utility';

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
    axios.get(
      `https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env.REACT_APP_STOCK_API_KEY}&symbols=aapl,fb,tsla,snap,googl,amzn,msft,lyft,twtr,sq&types=quote,news`
    )
    .then(response => {
      let stocksObj = response.data;
      let stocksArr = Object.values(stocksObj);
      this.setState({ 
        stocks: stocksArr,
        isLoaded: true,
      });
      // console.log({ stocksArr, response });
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