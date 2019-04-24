import React from 'react';
import StockList from '../components/lists/stock-list';
import News from '../components/lists/news-list';
import ForexList from '../components/lists/forex-list';

const HomePage = () =>
  <div>
    <News />
    <StockList />
    <ForexList />
  </div>

export default HomePage;