import React from 'react';
import { Link } from 'react-router-dom';

const NavbarStyle = {
  margin: '0',
  padding: '5px 25px',
  color: '#FFF',
  backgroundColor: '#000',
};

const MenuStyle = {
  backgroundColor: 'yellow',
};

const LogoStyle = {
  textDecoration: 'none',
  color: '#fff',
};

const LinkStyle = {
  height: '100%',
  display: 'inline-block',
  padding: '1.25em 2.00em',
  textDecoration: 'none',
  color: '#000',
  fontWeight: 'bold',
};

const Navbar = () =>
  <div> 
    <div style={NavbarStyle}>
      <Link to="/" style={LogoStyle}>
        <h2>
          <span role='img' aria-label='money with wings emoji'>💸 &nbsp;</span>SimpleStock
        </h2>
      </Link>
    </div>
    <div style={MenuStyle}>
      <Link style={LinkStyle} to="/">Flash Briefing</Link>
      <Link style={LinkStyle} to="/stocks">IPOs</Link>
      <Link style={LinkStyle} to="/forex">Forex</Link>
      <Link style={LinkStyle} to="/crypto">Crypto</Link>
      |
      <Link style={LinkStyle} to="*">Time & Money</Link>
    </div>
  </div>

export default Navbar;