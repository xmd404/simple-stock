import React from 'react';
import ForexTicket from '../tickets/forex-ticket';

const ForexTicketListStyle = {
  overflowX: 'none',
  margin: '0',
  padding: '45px 25px',
};

const ForexTicketList = () =>
  <div style={ForexTicketListStyle}>
    <ForexTicket />
    <ForexTicket />
    <ForexTicket />
    <ForexTicket />
    <ForexTicket />
  </div>

export default ForexTicketList;