'strict';
import React from 'react';

const TicketStyle = {
  display: 'inline-block',
  margin: '0',
  minWidth: '240px',
  maxWidth: '100%',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
};

const Ticket = (data, index) =>
  <div style={TicketStyle} key={index}>
    <hr/>
    <h2>{data.name}</h2>
    <p>Current: {data.current}</p>
    <p>High: {data.high}</p>
    <p>Low: {data.low}</p>
  </div>

export default Ticket;