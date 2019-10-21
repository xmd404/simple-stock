import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  overflow-x: none;
  margin: 0;
  padding: 2.75em;
  color: #fff;
  background-color: #000;
  text-align: center;
`;

const List = styled.div`
  margin: 0;
  padding: 15px 4px;
  color: #fff;
  background-color: #000;
  overflow: auto;
  white-space: nowrap;
  text-align: center;
`;

const ListItem = styled.div`
  display: inline-block;
  height: 250px;
  width: 100%;
  max-width: 250px;
  margin: 1.75em 1.35em;
  padding: 5px 15px;
  color: #000;
  background-color: #FFF;
  border-radius: 5%;
`;

const DataSourcePage = () =>
  <div>
    <Header>
      <h2><b>Data Sources</b></h2>
      <p>
        Top <b>currency pairs</b> from across the &nbsp;🌎
      </p>
    </Header>
    <List>
      <ListItem>
        <h2>Stock News API</h2>
        <a 
        href='https://stocknewsapi.com'
        target='_blank'
        rel='noopener noreferrer'
        >
          Website
        </a>
        &nbsp; | &nbsp;
        <a 
        href='https://stocknewsapi.com/documentation'
        target='_blank'
        rel='noopener noreferrer'
        >
          Docs
        </a>
      </ListItem>
      <ListItem>
        <h2>IEX Cloud</h2>
        <a 
        href='https://iexcloud.io/'
        target='_blank'
        rel='noopener noreferrer'
        >
          Website
        </a>
        &nbsp; | &nbsp;
        <a 
        href='https://iexcloud.io/docs/api/'
        target='_blank'
        rel='noopener noreferrer'
        >
          Docs
        </a>
      </ListItem>
      <ListItem>
        <h2>Fixer</h2>
        <a 
        href='https://fixer.io/'
        target='_blank'
        rel='noopener noreferrer'
        >
          Website
        </a>
        &nbsp; | &nbsp;
        <a 
        href='https://fixer.io/documentation'
        target='_blank'
        rel='noopener noreferrer'
        >
          Docs
        </a>
      </ListItem>
      <ListItem>
        <h2>CoinMarketCap</h2>
        <a 
        href='https://coinmarketcap.com/'
        target='_blank'
        rel='noopener noreferrer'
        >
          Website
        </a>
        &nbsp; | &nbsp;
        <a 
        href='https://coinmarketcap.com/api/documentation/v1/'
        target='_blank'
        rel='noopener noreferrer'
        >
          Docs
        </a>
      </ListItem>
    </List>
  </div>

export default DataSourcePage;