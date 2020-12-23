import React, { useEffect, useState } from 'react';
import { Container } from './components';
import { Loading } from '../../utility';
import { ViewMoreButton } from '../miscellaneous/buttons';
import axios from 'axios';
import CryptoNews from '../news/crypto';
import LatestFromReddit from '../news/reddit';
import CryptoChart from './CryptoChart';

const CryptoChartContainer = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [crypto, setCrypto] = useState('');
	// fetch data from api
	useEffect(() => {
		axios
			.get(`https://api.coingecko.com/api/v3/coins/${window.location.href.split("/")[6]}`)
				.then(res => {
					setCrypto(res.data);
					setLoaded(true);
					console.log(res.data);
				})
				.catch(err => {
					console.log(err);
					setError(true);
				});
	}, []);
	// render error, loading, or success state
	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<Container>
				<CryptoChart crypto={crypto} />
				<br/><br/>
				<LatestFromReddit />
				<CryptoNews />
				<ViewMoreButton />
			</Container>
		);
	};
};

export default CryptoChartContainer;
