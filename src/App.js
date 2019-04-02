import React from 'react';
import Navbar from './components/navbar/navbar';
import StockTicketList from './components/stock-ticket-list/stock-ticket-list';
import Footer from './components/footer/footer';
import NewsClipList from './components/news-clip-list/news-clip-list';

const App = () =>
  <div>
    <Navbar />
    <NewsClipList />
    <StockTicketList />
    <Footer />
  </div>

export default App;