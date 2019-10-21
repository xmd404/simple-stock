import React from 'react';

const NavbarStyle = {
  margin: '0',
  padding: '5px 25px',
  color: '#fff',
  backgroundColor: '#000',
};

const MenuStyle = {
  color: '#fff',
  backgroundColor: '#44c17b',
  overflow: 'auto',
  whiteSpace: 'nowrap',
};

const LogoStyle = {
  textDecoration: 'none',
  color: '#fff',
};

const LinkStyle = {
  height: '100%',
  display: 'inline-block',
  padding: '0 25px',
  textDecoration: 'none',
  color: '#fff',
  fontWeight: 'bold',
};

const Navbar = () =>
  <div style={{ margin: '0' }}> 
    <div style={NavbarStyle}>
      <h2 style={LogoStyle}>
        <span role='img' aria-label='money with wings emoji'>💸 &nbsp;</span>SimpleStock
      </h2>
    </div>
    <div style={MenuStyle}>
      <h4 style={LinkStyle}>Live, data-driven market trends & analysis&nbsp; ✨</h4>
    </div>
  </div>

export default Navbar;