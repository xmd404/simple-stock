import React from 'react';
import StockListContainer from '../components/lists/StockListContainer';
import CryptoListContainer from '../components/lists/CryptoListContainer';
import ForexList from '../components/lists/forex';
import MetalsList from '../components/lists/metals';
import News from '../components/lists/news';

const HomePage = () =>
  <div>
    <StockListContainer />
    <CryptoListContainer />
    <ForexList />
    <MetalsList />
  </div>

export default HomePage;