import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 0;
	padding: 25px;
	text-align: center;
`;

const Tip = styled.p`
  font-weight: 400;
  max-width: 360px;
  margin 0 auto;
`;

const Tips = () => (
	<Container>
		<Tip>
		<span role="img" aria-label="leaf emoji">🌿</span> <b>Simple Tip</b> &nbsp;~&nbsp;{' '}
			<span id="">Save & invest 10% of your income. Compound interest is the 8th wonder of the world.</span>
		</Tip>
	</Container>
);

export default Tips;
