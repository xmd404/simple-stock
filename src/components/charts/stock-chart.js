import React, { Component } from 'react';
import axios from 'axios';
import { error, symbols, getMarketSymbol, getMarketMessage, Loading } from '../../utility';

class StockChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stock: '',
    };
  }

  componentWillMount() {
    console.time('Fetching stock chart');
    axios.get(
      `https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env.REACT_APP_STOCK_API_KEY}&symbols=${symbols}&types=quote,news`
    )
    .then(response => {
      let stockObj = response.dat
      let stock = '';
      this.setState({
        stock: stock,
        isLoaded: true,
      });
      console.timeEnd('Fetching stock chart');
      // console.log({ stock }, response.status);
    })
    .catch(error());
  }
};

export default StockChart;