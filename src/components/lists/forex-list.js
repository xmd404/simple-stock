import React, { Component } from 'react';
import axios from 'axios';
import { error, pairs, Loading } from '../../utility';

const section = {
  margin: '0',
  padding: '25px',
  color: '#fff',
  backgroundColor: '#000',
}

const list = {
  overflow: 'auto',
  whiteSpace: 'nowrap',
};

const card = {
  display: 'inline-block',
  margin: '1.35em',
  padding: '25px 40px',
  width: '160px',
  maxWidth: '100%',
  color: '#000',
  backgroundColor: '#fff',
  borderRadius: '5%',
};

class ForexList extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pairs: [],
    };
  }

  componentWillMount() {
    console.time('Fetching currensy pairs')
    axios.get(
      `http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FOREX_API_KEY}&symbols=${pairs}`
    )
    .then(response => {
      let data = response.data;
      let pairs = Object.entries(data.rates)
      this.setState({ 
        pairs: pairs,
        isLoaded: true,
      });
      console.timeEnd('Fetching currensy pairs');
      console.log({ pairs }, response.status);
    })
    .catch(error())
  }

  render() {
    const { error, isLoaded, pairs} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (<Loading />)
    } else {
      return (
        <div style={section}>
          <h2 style={{textAlign: 'center'}}>
            Forex Markets.
          </h2>
          <p style={{textAlign: 'center'}}>
            Top <b>currency pairs</b> from across the &nbsp;🌎
          </p>
          <div style={list}>
            {pairs.map(pair => (
              <div key={pair} pair={pair} style={card}>
                <h1>EUR / {pair[0]}</h1>
                <h4><b>$</b> {pair[1].toFixed(2)}</h4>
            </div>
            ))}
          </div>
        </div>
      );
    }
  }
};

export default ForexList;