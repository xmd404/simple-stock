import React, { Component, useEffect, useState } from 'react';
import { List, Title, Card, Logo } from './components';
import { error, symbols, getCryptoChart, Loading } from '../../utility';
import { ViewMoreButton } from '../miscellaneous/buttons';
import axios from 'axios';
import News from './news';

const ticker = {
	color: 'magenta',
};

// const container = {
// 	margin: '0 auto',
// 	width: '100%',
// 	maxWidth: '650px',
// 	borderRadius: '5%'
// };

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
					let crypto = res.data;
					setCrypto(crypto);
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
			<div>
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
				<ViewMoreButton />
			</div>
		);
	};
};

export default CryptoChart;
