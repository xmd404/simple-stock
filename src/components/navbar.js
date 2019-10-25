import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
	margin: 0;
	padding: 5px 25px;
	color: #fff;
	background-color: #000;
	text-decoration: none;
`;

const Navbar = () => (
	<div style={{ margin: '0' }}>
		<Logo>
			<h1>
				<span role="img" aria-label="money with wings emoji">
					💸 &nbsp;
				</span>SimpleStock
			</h1>
		</Logo>
	</div>
);

export default Navbar;
