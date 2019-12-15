import React from 'react';
import styled from 'styled-components';

const Logo = styled.nav`
	padding: 40px 0 25px 40px;
	text-decoration: none;
	width: auto;
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
