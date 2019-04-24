import React from 'react';
import { Link } from 'react-router-dom';

const FooterStyle = {
  margin: '0',
  padding: '5px 45px',
  color: '#fff',
  backgroundColor: '#000',
  textAlign: 'center',
};

const FooterLinkStyle = {
  color: '#fff',
};

const Footer = () =>
  <div style={FooterStyle}>
    <p>
      Thanks for using
      &nbsp;
      <span role='img' aria-label='money with wings emoji'>💸 </span><b>SimpleStock</b>.
      &nbsp;
      <Link to='/data-sources' style={FooterLinkStyle}>
        Where do we get our data
      </Link>?
    </p>
  </div>

export default Footer;