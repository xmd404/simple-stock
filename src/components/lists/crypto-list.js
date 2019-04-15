import React, { Component } from 'react';
import axios from 'axios';
import { error } from '../../utility';

const ListStyle = {
  overflowX: 'none',
  margin: '0',
  padding: '45px 25px',
};

const cryptostyle = {
  display: 'inline-block',
  margin: '0',
  minWidth: '240px',
  maxWidth: '100%',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
};

class CryptoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      crypto: [],
    };
  }

  componentWillMount() {
    axios.get(
      `https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env.REACT_APP_STOCK_API_KEY}&symbols=aapl,fb,tsla,snap,googl,amzn,msft,lyft,twtr,sq&types=quote,news`
    )
    .then(response => {
      let cryptoObj = response.data;
      let cryptoArr = Object.values(cryptoObj);
      this.setState({ 
        crypto: cryptoArr,
        isLoaded: true,
      });
      console.log({ cryptoArr, response });
    })
    .catch(error());
  }

  render() {
    const { error, isLoaded, crypto } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Crypto list is Loading...</div>;
    } else {
      return (
        <div style={ListStyle}>
          {crypto.map(coin => (
            <div key={coin.quote.symbol} coin={coin} style={cryptostyle}>
              <hr/>
              <p>{coin.quote.companyName}</p>
              <h1>{coin.quote.symbol}</h1>
              <h3>${coin.quote.latestPrice}</h3>
            </div>
          ))}
        </div>
      );
    }
  }
};

export default CryptoList;