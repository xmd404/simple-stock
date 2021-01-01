import React from 'react';
import { Link } from 'react-router-dom';
import { getHomePage, getDiscoverPage, getProfilePage } from '../utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Viewer from './viewer';

library.add(fas);

const Navbar = () => (
	<>
		
		<div className="navbar">
			<Viewer />
			<Link to="/" onClick={getHomePage}>
				<FontAwesomeIcon icon={[ 'fas', 'home' ]} size="lg" />
				<p>Home</p>
			</Link>
			{/* <Link to="/discover" onClick={getDiscoverPage}>
				<FontAwesomeIcon icon={[ 'fas', 'search' ]} size="lg" />
				<p>Discover</p>
			</Link> */}
			<Link to="/profile" onClick={getProfilePage}>
				<FontAwesomeIcon icon={[ 'fas', 'user' ]} size="lg" />
				<p>Profile</p>
			</Link>
		</div>
	</>
);

export default Navbar;
