import React from 'react';
import StockList from '../components/tickets/stock-list';
import ForexTicketList from '../components/tickets/forex-ticket-list';
import CryptoTicketList from '../components/tickets/crypto-ticket-list';
import NewsClipList from '../components/briefings/news-list';
import SignUpForm from '../components/forms/signup-form';

const HomePage = () =>
  <div>
    <NewsClipList />
    <SignUpForm />
    <StockList />
    <ForexTicketList />
    <CryptoTicketList />
  </div>

export default HomePage;