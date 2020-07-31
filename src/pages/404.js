import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 600px;
  width: auto;
  min-height: 100%;
  text-align: center;
  font-size: 150%;
`;

const Image = styled.img`
  height: 350px;
  width: auto;
  max-height: auto;
  max-width: 100%
`;

const PageNotFound = () =>
  <Container>
    <br/>
    <h1 style={{ margin: '0', padding: '0' }}>💸🐷💸</h1>
    <h2 style={{ margin: '0', padding: '0' }}>
      page not found
    </h2>
    <br/>
    <Image src={'../assets/pigsfly.gif'} />
  </Container>

export default PageNotFound;