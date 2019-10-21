import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { error, pairs, Loading } from '../../utility';

const list = {
  overflowX: 'none',
  margin: '0',
  padding: '2.75em',
  color: '#fff',
  backgroundColor: '#000',
  textAlign: 'center',
};

const List = styled.div`
  margin: 0;
  padding: 15px 4px;
  color: #fff;
  background-color: #000;
  overflow: auto;
  white-space: nowrap;
  text-align: center;
`;

const ListItem = {
  display: 'inline-block',
  width: '100%',
  maxWidth: '250px',
  margin: '1.75em 1.35em',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
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
      `https://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FOREX_API_KEY}&symbols=${pairs}`
    )
    .then(response => {
      let data = response.data;
      let pairs = Object.entries(data.rates);
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
        <div>
          <div style={list}>
            <h2>
              <b>Forex Market</b>
            </h2>
            <p>
              Top <b>currency pairs</b> from across the &nbsp;🌎
            </p>
          </div>
          <List>
            {pairs.slice(0, 7).map(pair => (
              <div key={pair} pair={pair} style={ListItem}>
                <h2>EUR / {pair[0]}</h2>
                <h4><b>€</b> {pair[1].toFixed(2)}</h4>
            </div>
            ))}
          </List>
        </div>
      );
    }
  }
};

export default ForexList;