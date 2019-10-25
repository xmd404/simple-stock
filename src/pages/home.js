import React from 'react';
import StockList from '../components/lists/stock-list';
import News from '../components/lists/news-list';
import ForexList from '../components/lists/forex-list';
import CryptoList from '../components/lists/crypto-list';

const HomePage = () =>
  <div>
    <News />
    <ForexList />
    <StockList />
    <CryptoList />
  </div>

export default HomePage;