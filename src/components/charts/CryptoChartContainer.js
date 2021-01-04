import React, { useEffect, useState } from 'react';
import { Container, CoinbaseLink } from '../components';
import { Loading } from '../../utility';
import axios from 'axios';
import CryptoNews from '../news/crypto';
import LatestFromReddit from '../news/reddit';
import CryptoChart from './CryptoChart';
import LatestFromTwitter from '../news/twitter';

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
				<LatestFromTwitter />
				<LatestFromReddit />
				<CryptoNews />
				<CoinbaseLink crypto={crypto} />
			</Container>
		);
	};
};

export default CryptoChartContainer;
