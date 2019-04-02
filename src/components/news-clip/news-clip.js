import React from 'react';

const NewsClipStyle = {
  display: 'inline-block',
  maxWidth: '275px',
  margin: '1.00em',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
};

const NewsClip = () =>
  <div style={NewsClipStyle}>
    <h2>Headline</h2>
    <p>MM/DD/YYYY @ 11:11a</p>
    <p>Short briefing / preview ...</p>
  </div>

export default NewsClip;