import React, { useEffect, useState } from 'react';
import { Container, Card, Logo } from './components';
import { Loading } from '../../utility';
import { ViewMoreButton } from '../miscellaneous/buttons';
import axios from 'axios';
import CryptoNews from '../news/crypto';
import LatestFromReddit from '../news/reddit';
import Articles from '../lists/articles';

const CryptoChart = () => {
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
				<Card key={crypto.symbol} crypto={crypto}>
					<div style={{ float: 'left', width: '50%' }}>
						<Logo src={crypto.image.thumb}/>
						<b>
							<h2>{crypto.symbol}</h2>
						</b>
						<p className="cardTicker" style={{ height: '75px'}}>{crypto.id}</p>
					</div>
					<div style={{ float: 'right', width: '50%', textAlign: 'right' }}>
						<br/>
						<h2>${crypto.market_data.current_price.usd}</h2>
					</div>
				</Card>
				<Articles />
				<LatestFromReddit />
				<CryptoNews />
				<ViewMoreButton />
			</Container>
		);
	};
};

export default CryptoChart;
