import React from 'react';
import StockList from '../components/tickets/stock-list';
import NewsClipList from '../components/briefings/news-list';

const StocksPage = () =>
  <div>
    <NewsClipList />
    <StockList />
  </div>

export default StocksPage;