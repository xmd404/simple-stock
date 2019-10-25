import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
	margin: 2.75em 1.35em 2.25em;
	padding: 0 20px;
	color: #fff;
	background-color: #000;
	text-decoration: none;
`;

const Navbar = () => (
	<Logo>
		<h1 style={{ margin: '0', padding: '0' }}>
			<span role="img" aria-label="money with wings emoji">
				💸 &nbsp;
			</span>SimpleStock
		</h1>
		<p style={{ margin: '0', padding: '0' }}>
			<b>Live</b>, data-driven <b>trends</b> & <b>analysis</b>.
		</p>
	</Logo>
);

export default Navbar;
