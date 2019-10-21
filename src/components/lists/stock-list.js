import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { error, symbols, getMarketMessage, Loading } from '../../utility';

const list = {
  overflowX: 'none',
  margin: '0',
  padding: '2.75em',
  color: '#fff',
  backgroundColor: '#000',
  textAlign: 'center',
};

const List = styled.div`
  margin: 0;
  padding: 15px 4px;
  color: #fff;
  background-color: #000;
  overflow: auto;
  white-space: nowrap;
  text-align: center;
`;

const ListItem = {
  display: 'inline-block',
  width: '100%',
  maxWidth: '250px',
  margin: '1.75em 1.35em',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
  borderRadius: '5%',
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
      return (<Loading />)
    } else {
      return (
          <div>
            <div style={list}>
              <h2>
                <b>Stock Market</b>
              </h2>
              <p>
                The <b>stock market</b> is&nbsp;
                <b>
                  {getMarketMessage(stocks[0].quote.calculationPrice)}
                </b>
              </p>
            </div>
            <List>
              {stocks.splice(0, 7).map(stock => (
                <div key={stock.quote.symbol} stock={stock} style={ListItem}>
                  <h2>${stock.quote.latestPrice}</h2>
                  <b><h1>{stock.quote.symbol}</h1></b>
                  <p>{stock.quote.companyName}</p>
                  <p>
                    H: ${stock.quote.week52High}
                    &nbsp;|&nbsp;
                    L: ${stock.quote.week52Low}
                  </p>
                </div>
              ))}
            </List>
          </div>
      );
    }
  }
};

export default StockList;