import React from 'react';
import StockList from '../components/lists/stock-list';
import NewsClipList from '../components/lists/news-list';

const StocksPage = () =>
  <div>
    <NewsClipList />
    <StockList />
  </div>

export default StocksPage;