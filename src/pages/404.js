import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 700px;
  width: auto;
  min-height: 100%;
  text-align: center;
  font-size: 150%;
`;

const PageNotFound = () =>
  <Container>
    <br/><br/>
    <h1 style={{ margin: '0', padding: '0' }}>404</h1>
    <p>page not found, brought this instead</p>

  </Container>

export default PageNotFound;