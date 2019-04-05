import React from 'react';
import StockTicket from '../tickets/stock-ticket';

const StockTicketListStyle = {
  overflowX: 'none',
  margin: '0',
  padding: '45px 25px',
};

const StockTicketList = () =>
  <div style={StockTicketListStyle}>
    <StockTicket />
    <StockTicket />
    <StockTicket />
    <StockTicket />
    <StockTicket />
  </div>

export default StockTicketList;