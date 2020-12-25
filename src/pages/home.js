import React from 'react';
import ArticlesContainer from '../components/lists/ArticlesContainer';
import StockListContainer from '../components/lists/StockListContainer';
import CryptoListContainer from '../components/lists/CryptoListContainer';
import ForexListContainer from '../components/lists/ForexListContainer';
import CommoditiesListContainer from '../components/lists/CommoditiesListContainer';
import NewsContainer from '../components/lists/NewsContainer';

const HomePage = () =>
  <div>
    <NewsContainer />
    <StockListContainer />
    <CryptoListContainer />
    <ForexListContainer />
    <CommoditiesListContainer />
  </div>

export default HomePage;