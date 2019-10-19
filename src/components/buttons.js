import React from 'react';
import styled from 'styled-components';

const LargeButton = styled.a`
  display: inline-block;
  width: 15%;
  min-width: 270px;
  margin: 1.00em;
  padding: 5px 15px;
  font-size: 150%;
  color: #fff;
`

export const ViewMoreButton = () =>
  <LargeButton>
    <h1 style={{textAlign: 'left'}}>View More Stocks</h1>
    <hr/>
  </LargeButton>