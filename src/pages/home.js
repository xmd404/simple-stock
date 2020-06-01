import React from 'react';
import StockList from '../components/lists/stock-list';
import News from '../components/lists/news-list';
import ForexList from '../components/lists/forex-list';
import CryptoList from '../components/lists/crypto-list';
import DraggableVideo from '../components/draggable.js';

const HomePage = () =>
  <div>
    <DraggableVideo />
    <News />
    <StockList />
    <CryptoList />
    <ForexList />
  </div>

export default HomePage;