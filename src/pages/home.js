import React from 'react';
import StockTicketList from '../components/tickets/stock-ticket-list';
import ForexTicketList from '../components/tickets/forex-ticket-list';
import CryptoTicketList from '../components/tickets/crypto-ticket-list';
import NewsClipList from '../components/briefings/news-clip-list';
import SignUpForm from '../components/forms/signup-form';

const HomePage = () =>
  <div>
    <NewsClipList />
    <SignUpForm />
    <StockTicketList />
    <ForexTicketList />
    <CryptoTicketList />
  </div>

export default HomePage;