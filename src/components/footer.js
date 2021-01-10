import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
	width: auto;
	margin: 0;
	padding: 15px 35px 35px 35px;
	text-align: center;
`;

const Footer = () => (
	<Foot>
		<br/>
		<p>
			Thanks for using &nbsp;
			<span role="img" aria-label="money with wings emoji">
				💸{' '}
			</span>
			<b>SimpleStock</b>.
		</p>
		<br/>
	</Foot>
);

export default Footer;
