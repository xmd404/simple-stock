import React, { Component } from 'react';
import axios from 'axios';
import { error } from '../../utility';

class StockList extends Component {
  state = {
      tickets: [],
    };

  componentDidMount() {
    const API_KEY = 'pk_f8fb41e0cff74b73b0ad93bf4a374421';
    axios.get(
      `https://cloud.iexapis.com/beta/tops
      ? token = ${API_KEY}
      & symbols = aapl,fb,snap`
    )
    .then(response => {
      console.log(response);
      this.setState({ tickets: response.data });
    })
    .catch(error())
  }

  render() {
    const { tickets } = this.state;
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
};

export default StockList;