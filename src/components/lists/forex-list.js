import React, { Component } from 'react';
import axios from 'axios';
import { error } from '../../utility';

class ForexList extends Component {
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
      `https://cloud.iexapis.com/beta/tops?token=pk_f8fb41e0cff74b73b0ad93bf4a374421&symbols=aapl,fb,snap`
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
      return <div>Forex list is Loading...</div>;
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

export default ForexList;