import React from 'react';
import Navbar from './components/navbar/navbar';
import StockTicketList from './components/stock-ticket-list/stock-ticket-list';
import Footer from './components/footer/footer';
import NewsClip from './components/news-clip/news-clip';

const App = () =>
  <div>
    <Navbar />
    <NewsClip />
    <StockTicketList />
    <Footer />
  </div>

export default App;