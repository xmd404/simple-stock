import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../components/forms/sign-up';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000;
  text-align: center;
`;

const PageNotFound = () =>
  <Container>
    <h1>
      <SignUpForm />
    </h1>
  </Container>

export default PageNotFound;