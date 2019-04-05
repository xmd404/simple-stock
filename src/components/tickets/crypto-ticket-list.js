import React from 'react';
import CryptoTicket from './crypto-ticket';

const TicketListStyle = {
  overflowX: 'none',
  margin: '0',
  padding: '45px 25px',
};

const CryptoTicketList = () =>
  <div style={TicketListStyle}>
    <CryptoTicket />
    <CryptoTicket />
    <CryptoTicket />
    <CryptoTicket />
    <CryptoTicket />
  </div>

export default CryptoTicketList;