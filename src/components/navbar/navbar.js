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
      <Link style={LinkStyle} to="/">Start Here</Link>
      <Link style={LinkStyle} to="*">Time & Money</Link>
      <Link style={LinkStyle} to="*">Banking 101</Link>
      <Link style={LinkStyle} to="/stocks">Stocks</Link>
      <Link style={LinkStyle} to="*">Forex</Link>
      <Link style={LinkStyle} to="*">Crypto</Link>
      <Link style={LinkStyle} to="*">Credit</Link>
      <Link style={LinkStyle} to="*">Work Remote</Link>
      <Link style={LinkStyle} to="*">Live Abroad</Link>
      <Link style={LinkStyle} to="*">Pay Less Tax</Link>
    </div>
  </div>

export default Navbar;