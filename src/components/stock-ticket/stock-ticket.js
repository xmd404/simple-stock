import React from 'react';

const StockTicketStyle = {
  display: 'inline-block',
  margin: '0',
  minWidth: '240px',
  maxWidth: '100%',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
};

const StockTicket = () =>
  <div style={StockTicketStyle}>
    <h2>ABC Company</h2>
    <p>Stock Price:</p>
    <p>Stock description ...</p>
  </div>

export default StockTicket;