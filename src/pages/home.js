import React from 'react';
import StockList from '../components/lists/stock';
import News from '../components/lists/news';
import Articles from "../components/lists/articles";
import CryptoList from '../components/lists/crypto';
import Tips from '../components/miscellaneous/tips';

const HomePage = () =>
  <div>
    <Articles />
    <StockList />
    <CryptoList />
  </div>

export default HomePage;