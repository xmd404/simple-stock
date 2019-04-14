import React from 'react';
import StockList from '../components/lists/stock-list';
import News from '../components/lists/news-list';

const HomePage = () =>
  <div>
    <News />
    <StockList />
  </div>

export default HomePage;