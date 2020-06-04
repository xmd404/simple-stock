import React from 'react';
import StockList from '../components/lists/stock-list';
import News from '../components/lists/news-list';
import ForexList from '../components/lists/forex-list';
import CryptoList from '../components/lists/crypto-list';
import VideoPlayer from '../components/draggable.js';

const HomePage = () =>
  <div>
    <VideoPlayer />
    <News />
    <StockList />
    <CryptoList />
    <ForexList />
  </div>

export default HomePage;