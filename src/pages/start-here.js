import React from 'react';
import StockTicketList from '../components/stock-ticket-list/stock-ticket-list';
import NewsClipList from '../components/news-clip-list/news-clip-list';

const StartHerePage = () =>
  <div>
    <NewsClipList />
    <StockTicketList />
  </div>

export default StartHerePage;