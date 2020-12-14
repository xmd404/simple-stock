import React, { useEffect, useRef, useState } from 'react';
import { List, Title, Card, Logo } from './components';
import { Loading, getCryptoChart } from '../../utility';
import axios from 'axios';

const CryptoList = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [cryptos, setCryptos] = useState([]);
	const scrollRef = useRef("myscroll");
	// fetch data from api
	useEffect(() => {
		axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false
      `)
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
			<div>
				<Title>
					<h2 style={{ margin: '0', padding: '0' }}>
						Crypto
					</h2>
				</Title>
				<List
					className="list-scroll"
					ref={scrollRef}
				>
					{cryptos.slice(0, 20).map((crypto) => (
						<Card key={crypto.symbol} crypto={crypto} onClick={getCryptoChart}>
							<Logo src={crypto.image}/>
							<b>
								<h2 className="cardSymbol">{crypto.symbol}</h2>
							</b>
							<p className="cardTicker" style={{ height: '75px'}}>{crypto.id}</p>
							<h3>${crypto.current_price.toFixed(2)}</h3>
						</Card>
					))}
				</List>
			</div>
		);
	};
};

export default CryptoList;
