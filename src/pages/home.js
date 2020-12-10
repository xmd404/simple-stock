import React from 'react';
import StockList from '../components/lists/stock';
import CryptoList from '../components/lists/crypto';
import ForexList from '../components/lists/forex';

const HomePage = () =>
  <div>
    <StockList />
    <CryptoList />
    <ForexList />
  </div>

export default HomePage;