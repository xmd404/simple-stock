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
    <br/><br/>
    <h1 style={{ margin: '0', padding: '0' }}>404</h1>
    <p style={{ margin: '0', padding: '0' }}>
      page not found&nbsp; ;-)
    </p>
    <br/>
    <Image src={'../assets/pigsfly.gif'} />
  </Container>

export default PageNotFound;