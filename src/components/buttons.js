import React from 'react';
import styled from 'styled-components';

const LargeButton = styled.a`
  display: inline-block;
  width: 15%;
  min-width: 270px;
  margin: 1.00em;
  padding: 5px 15px;
  color: #000;
  border-radius: 5%;
`

export const ViewMoreButton = () =>
  <LargeButton>
    <br/>
    <hr/>
    <h1>View More Briefings</h1>
  </LargeButton>