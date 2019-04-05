import React from 'react';

const ForexTicketStyle = {
  display: 'inline-block',
  margin: '0',
  minWidth: '240px',
  maxWidth: '100%',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
};

const ForexTicket = () =>
  <div style={ForexTicketStyle}>
    <hr/>
    <h2>$/Pair</h2>
    <p>Current:</p>
    <p>High:</p>
    <p>Low:</p>
    {/* <p>Forex description ...</p> */}
  </div>

export default ForexTicket;