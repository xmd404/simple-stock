import React from 'react';
import SignUpForm from '../components/forms/signup-form';

const PageNotFoundStyle = {
  height: '100%',
  width: '100%',
  backgroundColor: '#FFF',
  textAlign: 'center',
};

const PageNotFound = () =>
  <div style={PageNotFoundStyle}>
    <h1>
      <SignUpForm />
    </h1>
  </div>

export default PageNotFound;