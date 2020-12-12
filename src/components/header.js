import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getHomePage } from '../utility';

const Logo = styled.header`
	position: -webkit-sticky;
    position: sticky;
    top: 0;
	margin: 0;
	padding: 45px 0px;
	width: auto;
	text-decoration: none;
	text-align: center;
	background-color: rgb(7, 9, 14); 
`;

const Header = () => (
	<Link to="/" onClick={getHomePage} style={{ textDecoration: 'none', color: '#fff' }}>
		<Logo>
			<h1 style={{ margin: '0', padding: '0' }}>
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
