import React from 'react';
import StockTicketList from '../components/tickets/stock-ticket-list';
import NewsClipList from '../components/news-clip-list/news-clip-list';

const HomePage = () =>
  <div>
    <NewsClipList />
    <StockTicketList />
  </div>

export default HomePage;