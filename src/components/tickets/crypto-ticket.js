import React from 'react';
import '../../main.css';

const TicketStyle = {
  display: 'inline-block',
  margin: '0',
  minWidth: '240px',
  maxWidth: '100%',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
};

const CryptoTicket = () =>
<div style={TicketStyle}>
  <hr/>
  <h2>Coin</h2>
  <p>Current:</p>
  <p>High:</p>
  <p>Low:</p>
</div>

export default CryptoTicket;