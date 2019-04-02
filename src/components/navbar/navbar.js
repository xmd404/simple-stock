import React from 'react';

const NavbarStyle = {
  margin: '0',
  padding: '5px 15px',
  color: '#FFF',
  backgroundColor: '#000',
};

const Navbar = () =>
  <div style={NavbarStyle}>
    <h1>
      <span role='img' aria-label='stock chart emoji'>💹 &nbsp;</span>SimpleStock
    </h1>
  </div>

export default Navbar;