import React from 'react';
import styled from 'styled-components';

const Logo = styled.nav`
	margin: 50px 0;
	padding: 0;
	width: auto;
	text-decoration: none;
	text-align: center;
`;

const Navbar = () => (
	<Logo>
		<h1 style={{ margin: '0', padding: '0' }}>
			<span role="img" aria-label="money with wings emoji">
				💸 &nbsp;
			</span>SimpleStock
		</h1>
		<p style={{ margin: '0', padding: '0' }}>
			data-driven <b>trends</b> & <b>analysis</b>.
		</p>
	</Logo>
);

export default Navbar;
