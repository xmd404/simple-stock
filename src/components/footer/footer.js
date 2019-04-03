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
      Crafted with
      <span
        role='img'
        aria-label='dunder or zap emoji'>
        &nbsp;⚡️&nbsp;
      </span>
      by Simple Little App Co.
      &nbsp;
      <a href="https://iexcloud.io">
        Data provided by IEX Cloud
      </a>.
    </p>
  </div>

export default Footer;