import React from 'react';

const ViewMoreButtonStyle = {
  display: 'inline-block',
  width: '15%',
  minWidth: '270px',
  margin: '1.00em',
  padding: '5px 15px',
  color: '#000',
  borderRadius: '5%',
};

const ViewMoreButton = () =>
  <div style={ViewMoreButtonStyle}>
    <br/>
    <hr/>
    <h1>View More Company News</h1>
  </div>
  
export default ViewMoreButton;