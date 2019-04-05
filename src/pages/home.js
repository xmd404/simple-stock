import React from 'react';
import StockTicketList from '../components/tickets/stock-ticket-list';
import NewsClipList from '../components/briefings/news-clip-list';
import SignUpForm from '../components/forms/signup-form';

const HomePage = () =>
  <div>
    <NewsClipList />
    <SignUpForm />
    <StockTicketList />
  </div>

export default HomePage;