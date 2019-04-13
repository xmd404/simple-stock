'strict';
import React, { Component } from 'react';
const API_KEY = process.env.REACT_APP_FOREX_API_KEY;
class ForexTicketList extends Component {
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

  componentDidMount() {
    fetch(`http://data.fixer.io/api/latest
    ? access_key = ${API_KEY}
    & symbols = GBP`)
      .then(res => res.json())
      .then(
        (result) => {
        this.setState({
          isLoaded: true,
          tickets: result,
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    )
  }

  render() {
    const { error, isLoaded, tickets } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <li key={tickets.base}>
            {tickets.base}
          </li>
        </ul>
      );
    }
  }
};

export default ForexTicketList;