import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Foot = styled.footer`
  margin: 0;
  text-align: center;
`;

const Footer = () =>
  <Foot>
    <p>
      Thanks for using
      &nbsp;
      <span role='img' aria-label='money with wings emoji'>💸 </span><b>SimpleStock</b>.
      &nbsp;
      <Link to='/data-sources' style={{ color: '#fff' }}>
        Where do we get our data
      </Link>?
    </p>
  </Foot>

export default Footer;