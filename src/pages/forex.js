import React from 'react';
import ForexTicketList from '../components/tickets/forex-ticket-list';
import NewsClipList from '../components/briefings/news-list';

const ForexPage = () =>
  <div>
    <NewsClipList />
    <ForexTicketList />
  </div>

export default ForexPage;