import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  margin: 0;
  padding: 5px 25px;
  color: #fff;
  background-color: #000;
  text-decoration: none;
`;

const About = styled.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  padding: 0 25px;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  background-color: #44c17b;
  overflow: auto;
  white-space: nowrap;
`;

const Navbar = () =>
  <div style={{ margin: '0' }}> 
    <Logo>
      <h2>
        <span role='img' aria-label='money with wings emoji'>💸 &nbsp;</span>SimpleStock
      </h2>
    </Logo>
    <About>
      <h4>Live, data-driven trends & analysis&nbsp; ✨</h4>
    </About>
  </div>

export default Navbar;