import React, { useEffect, useState } from 'react';
import { Loading, shuffle, corsProxy, forex } from '../../utility';
import axios from 'axios';
import ForexList from './ForexList';

const ForexListContainer = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [pairs, setPairs] = useState([]);
	// fetch data from api
	useEffect(() => {
		axios
			.get(
				`${corsProxy}http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FOREX_API_KEY}&symbols=${Object.keys(forex)}`
				)
				.then(res => {
					setPairs(shuffle(Object.entries(res.data.rates)));
					setLoaded(true);

				})
				.catch(err => {
					setError(true);
					console.log(err);
				});
	}, []);
	// render error, loading, or success state
	if (error) {
		return <div></div>;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<ForexList pairs={pairs} />
		);
	};
};

export default ForexListContainer;
