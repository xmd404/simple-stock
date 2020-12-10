import React from 'react';
import styled from 'styled-components';
import { capitalize } from '../../utility';

const LargeButton = styled.div`
  margin: 1.25em auto;
  width: 99%;
  max-width: 300px;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  padding: 14px 28px;
  cursor: pointer;
  text-align: center;
`

export const ViewMoreButton = () =>
  <LargeButton>
    <b>
      <p>
        {`View More ${capitalize(window.location.href.split("/")[5])}`}
      </p>
    </b>
  </LargeButton>
    