import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
	margin: 1.75em 1.35em;
	padding: 0 20px;
	color: #fff;
	background-color: #000;
	text-decoration: none;
`;

const Navbar = () => (
	<Logo>
		<h1>
			<span role="img" aria-label="money with wings emoji">
				💸 &nbsp;
			</span>SimpleStock
		</h1>
		<p>
			<b>Live</b>, data-driven <b>trends</b> & <b>analysis</b>&nbsp; ✨
		</p>
	</Logo>
);

export default Navbar;
