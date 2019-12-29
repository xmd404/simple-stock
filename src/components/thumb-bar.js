import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const ThumbBar = () => (
	<div class="navbar">
		<Link to="/">
			<FontAwesomeIcon icon={[ 'fas', 'home' ]} />
			<p>Home</p>
		</Link>
		<Link to="/discover">
			<FontAwesomeIcon icon={[ 'fas', 'search' ]} />
			<p>Discover</p>
		</Link>
		<Link to="/profile">
			<FontAwesomeIcon icon={[ 'fas', 'user' ]} />
			<p>Profile</p>
		</Link>
	</div>
);

export default ThumbBar;
