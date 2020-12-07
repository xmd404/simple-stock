import React from 'react';
import StockList from '../components/lists/stock';
import Articles from "../components/lists/articles";
import CryptoList from '../components/lists/crypto';

const HomePage = () =>
  <div>
    <Articles />
    <StockList />
    <CryptoList />
  </div>

export default HomePage;