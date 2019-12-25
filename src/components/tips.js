import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  margin: 0;
  padding: 25px;
  text-align: center;
`

const Tip = styled.p`
  font-weight: 400;
  max-width: 360px;
  margin 0 auto;
`

const Tips = () => 
  <Container>
    <Tip>
      🌿 <b>Simple Tip</b> &nbsp;~&nbsp; Save & invest 10% of your income. Compound interest is the *th wonder of the world.
    </Tip>
  </Container>

export default Tips