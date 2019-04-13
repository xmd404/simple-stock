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

const ListItem = () =>
  <div style={ListItemStyle}>
    <h2>Headline</h2>
    <p>MM/DD/YYYY @ 11:11a</p>
    <p>Short briefing / preview ...</p>
  </div>
  
export default ListItem;