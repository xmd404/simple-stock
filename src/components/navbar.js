import React from 'react';
import { Link } from 'react-router-dom';

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
  padding: '0.25em 2.00em',
  textDecoration: 'none',
  color: '#fff',
  fontWeight: 'bold',
};

const Navbar = () =>
  <div style={{ margin: '0' }}> 
    <div style={NavbarStyle}>
      <Link to="/" style={LogoStyle}>
        <h2>
          <span role='img' aria-label='money with wings emoji'>💸 &nbsp;</span>SimpleStock
        </h2>
      </Link>
    </div>
    <div style={MenuStyle}>
      <p style={LinkStyle}>Flash Briefing</p>
    </div>
  </div>

export default Navbar;