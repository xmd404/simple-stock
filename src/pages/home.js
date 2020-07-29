import React from 'react';
import StockList from '../components/lists/stock';
import News from '../components/lists/news';
import ForexList from '../components/lists/forex';
import CryptoList from '../components/lists/crypto';
import Tips from '../components/miscellaneous/tips';

const HomePage = () =>
  <div>
    <News />
    <StockList />
    <CryptoList />
    <ForexList />
  </div>

export default HomePage;