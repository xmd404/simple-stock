import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
	width: auto;
	margin: 0 0 65px;
	padding: 15px 35px 35px 35px;
	text-align: center;
`;

const Footer = () => (
	<Foot>
		<p>
			Thanks for using &nbsp;
			<span role="img" aria-label="money with wings emoji">
				💸{' '}
			</span>
			<b>SimpleStock</b>.
		</p>
		<br/><br/><br/>
	</Foot>
);

export default Footer;
