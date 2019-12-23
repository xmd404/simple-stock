import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const ThumbBar = () => (
	<div class="navbar">
		<Link to="/">
			<p>
        <FontAwesomeIcon icon={[ 'fas', 'fa-home' ]} />
        Home
      </p>
		</Link>
		<Link to="/stocks">
			<p>Stocks</p>
		</Link>
		<Link to="/crypto">
			<p>Crypto</p>
		</Link>
		<Link to="/forex">
			<p>Forex</p>
		</Link>
		<Link to="/search">
			<p>Search</p>
		</Link>
	</div>
);

export default ThumbBar;
