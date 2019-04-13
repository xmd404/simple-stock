import React from 'react';
import StockList from '../components/lists/stock-list';
import ForexList from '../components/lists/forex-list';
import CryptoList from '../components/lists/crypto-list';
import News from '../components/lists/news-list';
import SignUpForm from '../components/forms/signup-form';

const HomePage = () =>
  <div>
    <News />
    <SignUpForm />
    <StockList />
    <ForexList />
    <CryptoList />
  </div>

export default HomePage;