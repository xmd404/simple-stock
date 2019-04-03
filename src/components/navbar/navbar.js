import React from 'react';

const NavbarStyle = {
  margin: '0',
  padding: '5px 25px',
  color: '#FFF',
  backgroundColor: '#000',
};

const MenuStyle = {
  backgroundColor: 'yellow',
};

const LinkStyle = {
  height: '100%',
  display: 'inline-block',
  padding: '1.25em 2.00em',
};

const Navbar = () =>
  <div>
    <div style={NavbarStyle}>
      <h2>
        <span role='img' aria-label='money with wings emoji'>💸 &nbsp;</span>SimpleStock
      </h2>
    </div>
    <div style={MenuStyle}>
      <p style={LinkStyle}>Start Here</p>
      <p style={LinkStyle}>Time & Money</p>
      <p style={LinkStyle}>Stocks</p>
      <p style={LinkStyle}>Forex</p>
      <p style={LinkStyle}>Crypto</p>
      <p style={LinkStyle}>Work Remote</p>
      <p style={LinkStyle}>Live Abroad</p>
      <p style={LinkStyle}>Pay Less Tax</p>
    </div>
  </div>

export default Navbar;