import React from 'react';
import StockListContainer from '../components/lists/StockListContainer';
import CryptoListContainer from '../components/lists/CryptoListContainer';
import ForexListContainer from '../components/lists/ForexListContainer';
import CommoditiesListContainer from '../components/lists/CommoditiesListContainer';
import NewsListContainer from '../components/lists/NewsListContainer';

const HomePage = () =>
  <div>
    <NewsListContainer />
    <StockListContainer />
    <CryptoListContainer />
    <ForexListContainer />
    <CommoditiesListContainer />
  </div>

export default HomePage;