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
  maxheight: 500px;
  width: auto;
`;

const PageNotFound = () =>
  <Container>
    <br/><br/>
    <h1 style={{ margin: '0', padding: '0' }}>404</h1>
    <p>page not found, brought this instead</p>
    <Image src={'pigsfly.gif'} />
  </Container>

export default PageNotFound;