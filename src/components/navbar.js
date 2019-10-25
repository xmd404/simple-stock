import React from 'react';
import styled from 'styled-components';

const Logo = styled.nav`
	padding: 40px 0 25px 40px;
	text-decoration: none;
	width: auto;
`;

const Navbar = () => (
	<Logo>
		<h2 style={{ margin: '0', padding: '0' }}>
			<span role="img" aria-label="money with wings emoji">
				💸 &nbsp;
			</span>SimpleStock
		</h2>
		<p style={{ margin: '0', padding: '0' }}>
			Data-driven <b>trends</b> & <b>analysis</b> ✨
		</p>
	</Logo>
);

export default Navbar;
