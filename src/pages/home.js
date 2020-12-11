import React from 'react';
import StockList from '../components/lists/stock';
import CryptoList from '../components/lists/crypto';
import ForexList from '../components/lists/forex';
import MetalsList from '../components/lists/metals';
import News from '../components/lists/news';

const HomePage = () =>
  <div>
    <News />
    <StockList />
    <CryptoList />
    <ForexList />
    <MetalsList />
  </div>

export default HomePage;