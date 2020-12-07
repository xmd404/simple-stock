import React from 'react';
import styled from 'styled-components';

const LargeButton = styled.div`
  margin: 1.25em auto;
  width: 50%;
  border: 2px solid magenta;
  background-color: transparent;
  color: magenta;
  padding: 14px 28px;
  cursor: pointer;
  text-align: center;
`

export const ViewMoreButton = () =>
  <LargeButton>
    View More Stocks
  </LargeButton>