import React from 'react';

const FooterStyle = {
  margin: '10px 0 0',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#F3F3F3',
};

const Footer = () =>
  <div style={FooterStyle}>
    <p>
      VerySimpleApps, LLC &nbsp;|&nbsp; Crafted with
      <span
        role='img'
        aria-label='dunder or zap emoji'>
        &nbsp;⚡️&nbsp;
      </span>
      in East Atlanta.
    </p>
  </div>

export default Footer;