import React from 'react';
import StockListContainer from '../components/lists/StockListContainer';
import CryptoListContainer from '../components/lists/CryptoListContainer';
import ForexListContainer from '../components/lists/ForexListContainer';
import NewsListContainer from '../components/lists/NewsListContainer';
import SearchBar from '../components/search';
import { Container } from '../components/components';

const HomePage = () =>
  <Container style={{ maxWidth: '1000px' }}>
    <SearchBar />
    <ul id="myUL" style={{ margin: 0, padding: 0 }}>
      <NewsListContainer />
      <StockListContainer />
      <CryptoListContainer />
      <ForexListContainer />
    </ul>
  </Container>

export default HomePage;