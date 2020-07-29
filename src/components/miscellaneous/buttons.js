import React from 'react';
import styled from 'styled-components';

const LargeButton = styled.a`
  display: inline-block;
  width: 100%;
  max-width: 250px;
  margin: 1.25em;
  font-size: 150%;
  color: #fff;
`

export const ViewMoreButton = () =>
  <LargeButton>
    <h2 style={{textAlign: 'left'}}>
      View More
      <br/>
      Stocks
    </h2>
    <hr/>
  </LargeButton>