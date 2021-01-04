import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getHomePage } from '../utility';

const Logo = styled.header`
	position: fixed;
	right: 0;
	left: 0;
	margin: 0;
	padding: 25px 0;
	width: auto;
	text-decoration: none;
	text-align: center;
	background-color: rgb(23, 27, 37); 
	z-index: 100;
	transition: 0.2s
`;

const Header = () => (
	<Link to="/" onClick={getHomePage} style={{ textDecoration: 'none', color: '#fff' }}>
		<Logo id="header">
			<h1 style={{ margin: '0', padding: '0' }} id="header-title">
				<span role="img" aria-label="money with wings emoji">
					💸 &nbsp;
				</span>SimpleStock
			</h1>
			<p style={{ margin: '0', padding: '0' }}>
				Generational wealth, for all.
			</p>
		</Logo>
	</Link>
);

export default Header;
