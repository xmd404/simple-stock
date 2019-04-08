import React from 'react';
import Ticket from '../tickets/ticket';

const TicketListStyle = {
  overflowX: 'none',
  margin: '0',
  padding: '45px 25px',
};

const CryptoTicketList = () =>
  <div style={TicketListStyle}>
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
  </div>

export default CryptoTicketList;