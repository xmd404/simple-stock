import React from 'react';
import styled from 'styled-components';

const Logo = styled.header`
	margin: 50px 0;
	padding: 0;
	width: auto;
	text-decoration: none;
	text-align: center;
`;

const Header = () => (
	<Logo>
		<h1 style={{ margin: '0', padding: '0' }}>
			<span role="img" aria-label="money with wings emoji">
				💸 &nbsp;
			</span>SimpleStock
		</h1>
		<p style={{ margin: '0', padding: '0' }}>
			Finance for the Rest of Us.
		</p>
	</Logo>
);

export default Header;
