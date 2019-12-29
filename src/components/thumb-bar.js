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
		<Link to="/discover">
			<p>Discover</p>
		</Link>
    <Link to="/profile">
			<p>Profile</p>
		</Link>
	</div>
);

export default ThumbBar;
