import React from 'react';
import styled from 'styled-components';

const Logo = styled.nav`
	padding: 40px 0 25px 40px;
	text-decoration: none;
	width: auto;
`;

const Navbar = () => (
	<Logo>
		<h1 style={{ margin: '0', padding: '0' }}>
			<span role="img" aria-label="money with wings emoji">
				💸 &nbsp;
			</span>SimpleStock
		</h1>
		<h5 style={{ margin: '0', padding: '0' }}>
			data-driven market analysis
		</h5>
	</Logo>
);

export default Navbar;
