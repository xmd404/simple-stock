import React from 'react';
import StockList from '../components/lists/stock-list';
import ForexTicketList from '../components/lists/forex-list';
import CryptoTicketList from '../components/lists/crypto-list';
import NewsClipList from '../components/lists/news-list';
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