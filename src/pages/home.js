import React from 'react';
import StockList from '../components/lists/stock';
import CryptoList from '../components/lists/crypto';

const HomePage = () =>
  <div>
    <StockList />
    <CryptoList />
  </div>

export default HomePage;