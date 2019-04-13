import React, { Component } from 'react';
import axios from 'axios';
import { error } from '../../utility';

class StockList extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tickets: [],
    };
  }

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_STOCK_API_KEY;
    axios.get(
      `https://cloud.iexapis.com/beta/tops
      ? token = ${API_KEY}
      & symbols = aapl,fb,snap`
    )
    .then(response => {
      console.log(response.data);
      this.setState({ tickets: response.data });
    })
    .catch(error())
  }

  render() {
    const { error, isLoaded, tickets } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Stock list is Loading...</div>;
    } else {
      return (
        <ul>
          {tickets.map(ticket => (
            <li key={ticket.symbol} ticket={ticket}>
              {ticket.symbol}
            </li>
          ))}
        </ul>
      );
    }
  }
};

export default StockList;