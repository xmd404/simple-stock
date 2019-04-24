import React, { Component } from 'react';
import axios from 'axios';
import { error } from '../../utility';

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

    )
    .then(response => {
      this.setState({
        // stock: stock,
        isLoaded: true,
      });
      console.timeEnd('Fetching stock chart');
      // console.log({ stock }, response.status);
    })
    .catch(error());
  }
};

export default StockChart;