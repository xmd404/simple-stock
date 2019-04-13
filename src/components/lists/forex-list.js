import React, { Component } from 'react';
const API_KEY = process.env.REACT_APP_FOREX_API_KEY;

class ForexList extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() in the Constructor!
    // Constructor is the only place where you should assign this.state directly.
    // In all other methods, you need to use this.setState() instead.
    this.state = {
      error: null,
      isLoaded: false,
      tickets: {},
    };
  }

  componentDidMount() {}

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
            <li key={ticket.base} ticket={ticket}>
              {ticket.base}
            </li>
          ))}
        </ul>
      );
    }
  }
};

export default ForexList;