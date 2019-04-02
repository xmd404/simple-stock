import React from 'react';
import Navbar from './components/navbar/navbar';
import StockTicketList from './components/stock-ticket-list/stock-ticket-list';
import Footer from './components/footer/footer';

const App = () =>
  <div>
    <Navbar />
    <StockTicketList />
    <Footer />
  </div>

export default App;