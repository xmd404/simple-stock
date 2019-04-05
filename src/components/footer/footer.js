import React from 'react';

const FooterStyle = {
  margin: '10px 0 0',
  padding: '5px 15px',
  color: '#FFF',
  backgroundColor: '#000',
};

const Footer = () =>
  <div style={FooterStyle}>
    <p>
      Thanks for using
      &nbsp;
      <span role='img' aria-label='money with wings emoji'>💸 </span><b>SimpleStock</b>.
      Question: &nbsp;
      <a href="https://iexcloud.io" target='_blank' rel='noopener noreferrer'>
        Where do we get our data from
      </a>?
    </p>
  </div>

export default Footer;