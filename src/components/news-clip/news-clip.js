import React from 'react';

const NewsClipStyle = {
  display: 'inline-block',
  width: '300px',
  maxWidth: '95%',
  height: 'auto',
  margin: '0',
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