import React, { useEffect, useState } from 'react';
import { Loading, shuffle, corsProxy, forex } from '../../utility';
import axios from 'axios';
import ForexChart from './ForexChart';
import { Container } from '../components';
import LatestFromReddit from '../news/reddit';
import ForexChartWidget from '../ForexChartWidget';

const ForexChartContainer = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [pairs, setPairs] = useState([]);
	// fetch data from api
	useEffect(() => {
		axios
			.get(
				`${corsProxy}http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FOREX_API_KEY}&symbols=${window.location.href.split("/")[6]}`
				)
				.then(res => {
					setPairs(shuffle(Object.entries(res.data.rates)));
					setLoaded(true);
					console.log({ pairs });

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
			<Container>
				<ForexChart pairs={pairs} />
				<ForexChartWidget />
				<br/>
				<LatestFromReddit />
			</Container>
		);
	};
};

export default ForexChartContainer;
