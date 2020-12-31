import React from 'react';
import StockListContainer from '../components/lists/StockListContainer';
import CryptoListContainer from '../components/lists/CryptoListContainer';
import ForexListContainer from '../components/lists/ForexListContainer';
import CommoditiesListContainer from '../components/lists/CommoditiesListContainer';
import NewsListContainer from '../components/lists/NewsListContainer';
import Footer from '../components/footer';
import SearchBar from '../components/search';

const HomePage = () =>
  <div>
    <ul id="myUL" style={{ margin: 0, padding: 0 }}>
      <NewsListContainer />
      <StockListContainer />
      <CryptoListContainer />
      <ForexListContainer />
    </ul>
  </div>

export default HomePage;