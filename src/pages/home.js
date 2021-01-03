import React from 'react';
import StockListContainer from '../components/lists/StockListContainer';
import CryptoListContainer from '../components/lists/CryptoListContainer';
import ForexListContainer from '../components/lists/ForexListContainer';
import CommoditiesListContainer from '../components/lists/CommoditiesListContainer';
import NewsListContainer from '../components/lists/NewsListContainer';
import Footer from '../components/footer';
import SearchBar from '../components/search';
import Viewer from '../components/viewer';
import { Container } from '../components/components';

const HomePage = () =>
  <Container style={{ maxWidth: '1000px' }}>
    <SearchBar />
    <br/><br/>
    <NewsListContainer />
    <ul id="myUL" style={{ margin: 0, padding: 0 }}>
      <StockListContainer />
      <CryptoListContainer />
      <ForexListContainer />
    </ul>
  </Container>

export default HomePage;