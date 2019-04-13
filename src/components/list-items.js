import React from 'react';

const ListItemStyle = {
  display: 'inline-block',
  width: '15%',
  minWidth: '260px',
  margin: '1.00em',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
  borderRadius: '5%',
};

const TicketStyle = {
  display: 'inline-block',
  margin: '0',
  minWidth: '240px',
  maxWidth: '100%',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
};

export const ListItem = (data, index) =>
  <div style={TicketStyle} key={index}>
    <hr/>
    <h2>{data.name}</h2>
    <p>Current: {data.current}</p>
    <p>High: {data.high}</p>
    <p>Low: {data.low}</p>
  </div>

export const NewsListItem = () =>
  <div style={ListItemStyle}>
    <h2>Headline</h2>
    <p>MM/DD/YYYY @ 11:11a</p>
    <p>Short briefing / preview ...</p>
  </div>