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
    axios.get(
      `https://cloud.iexapis.com/beta/stock/market/batch?token=pk_f8fb41e0cff74b73b0ad93bf4a374421&symbols=aapl,fb,tsla,snap,googl&types=quote,news,chart&range=1m&last=5`
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