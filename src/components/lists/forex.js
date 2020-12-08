import React, { useEffect, useRef, useState } from 'react';
import { List, Title, Card } from './components';
import { Loading, shuffle, getForexChart } from '../../utility';
import axios from 'axios';

const ForexList = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [pairs, setPairs] = useState([]);
	const scrollRef = useRef("myscroll");
	// fetch data from api
	useEffect(() => {
		axios
			.get(
				`https://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FOREX_API_KEY}&base=USD`
				)
				.then(res => {
					let unsorted = Object.entries(res.data.rates);
					let pairs = shuffle(unsorted);
					setPairs(pairs);
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
					<h1 style={{ margin: '0', padding: '0' }}>Forex</h1>
				</Title>
				<List
					className="list-scroll"
					ref={scrollRef}
				>
					{pairs.slice(0, 20).map((pair) => (
						<Card key={pair} pair={pair} onClick={getForexChart}>
							<br/>
							<img src={"https://www.countryflags.io/us/flat/32.png"}/>
							<br/><br/>
							<h2>usd / <span className="cardTicker">{pair[0].toLowerCase()}</span></h2>
							<h3>
								<b>$</b> {pair[1].toFixed(2)}
							</h3>
						</Card>
					))}
				</List>
			</div>
		);
	};
};

export default ForexList;
