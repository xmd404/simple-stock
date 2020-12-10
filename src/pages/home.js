import React from 'react';
import StockList from '../components/lists/stock';
import CryptoList from '../components/lists/crypto';
import Articles from '../components/lists/articles';
import ForexList from '../components/lists/forex';

const HomePage = () =>
  <div>
    <Articles />
    <StockList />
    <CryptoList />
    <ForexList />
  </div>

export default HomePage;