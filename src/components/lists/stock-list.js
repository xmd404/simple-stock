import React, { Component } from 'react';
import axios from 'axios';
import { error } from '../../utility';

const ListStyle = {
  overflowX: 'none',
  margin: '0',
  padding: '45px 25px',
};

const TicketStyle = {
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
      tickets: [],
    };
  }

  componentWillMount() {
    axios.get(
      `https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env.REACT_APP_STOCK_API_KEY}&symbols=aapl,fb,tsla,snap,googl,amzn, lyft&types=quote,news,chart&range=1m&last=5`
    )
    .then(res => {
      let ticketsObj = res.data;
      let ticketsArr = Object.values(ticketsObj);
      this.setState({ 
        tickets: ticketsArr,
        isLoaded: true,
      });
      console.log(this.state.tickets);
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
        <div style={ListStyle}>
          {tickets.map(ticket => (
            <div key={ticket.quote.symbol} ticket={ticket} style={TicketStyle}>
              <hr/>
              <p>{ticket.quote.companyName}</p>
              <h1>{ticket.quote.symbol}</h1>
              <p>Current: ${ticket.quote.latestPrice}</p>
              <p>High: ${ticket.quote.week52High}</p>
              <p>Low: ${ticket.quote.week52Low}</p>
            </div>
          ))}
        </div>
      );
    }
  }
};

export default StockList;