import React, { useEffect, useState } from 'react';
import { Loading } from '../../utility';
import CryptoList from './CryptoList';
import axios from 'axios';

const CryptoListContainer = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [cryptos, setCryptos] = useState([]);
	// fetch data from api
	useEffect(() => {
		axios
			.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)
				.then(res => {
					setCryptos(res.data);
					setLoaded(true);
				})
				.catch(err => {
					setError(true);
					console.log(err);
				});
	}, []);
	// render error, loading, or success state
	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<CryptoList cryptos={cryptos} />
		);
	};
};

export default CryptoListContainer;
