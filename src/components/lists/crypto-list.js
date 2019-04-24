import React, { Component } from 'react';
import axios from 'axios';
import { error, Loading } from '../../utility';

const list = {
  overflowX: 'none',
  margin: '0',
  padding: '25px',
  color: '#fff',
  backgroundColor: '#000',
};

const card = {
  display: 'inline-block',
  margin: '1.35em',
  padding: '25px',
  minWidth: '240px',
  maxWidth: '100%',
  color: '#000',
  backgroundColor: '#fff',
  borderRadius: '5%',
};

const options = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    start: 1,
    limit: 7,
    convert: 'USD',
  },
  headers: {
    'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_CRYPTO_API_KEY}`,
  },
  json: true,
}

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
    console.time('Fetching crypto data')
    axios(options)
    .then(response => {
      let cryptoObj = response.data;
      let cryptoArr = Object.values(cryptoObj);
      let crypto = cryptoArr;
      this.setState({ 
        crypto: crypto,
        isLoaded: true,
      });
      console.timeEnd('Fetching crypto data');
      console.log({ crypto }, response.status );
    })
    .catch(error());
  }

  render() {
    const { error, isLoaded, crypto } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (<Loading />)
    } else {
      return (
        <div style={list}>
          {crypto.map(coin => (
            <div key={coin.quote.symbol} coin={coin} style={card}>
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