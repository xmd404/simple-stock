import React from 'react';

const PageNotFoundStyle = {
  height: '700px',
  width: '100%',
  backgroundColor: '#FFF',
};

const PageNotFound = () =>
  <div style={PageNotFoundStyle}>
    <h1>
      <span role='img' aria-label='money with wings emoji'>💸 &nbsp;</span>
      Whoops... that page doesn't exist!
    </h1>
  </div>

export default PageNotFound;