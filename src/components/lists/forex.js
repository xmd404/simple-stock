import React, { useEffect, useRef, useState } from 'react';
import { List, Title, Card } from './components';
import { Loading, shuffle, getForexChart, corsProxy, forex } from '../../utility';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas, faCheckSquare, faCoffee);

const ForexList = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [pairs, setPairs] = useState([]);
	// const [country, setCountry] = useState({});
	const scrollRef = useRef("myscroll");
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
	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			`${corsProxy}http://data.fixer.io/api/symbols?access_key=${process.env.REACT_APP_FOREX_API_KEY}`
	// 			)
	// 			.then(res => {
	// 				let countries = res.data.symbols
	// 				setCountry(countries);
	// 				console.log(res.data.symbols);
	// 				console.log({ country });

	// 			})
	// }, []);
	// render error, loading, or success state
	if (error) {
		return <div></div>;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<div>
				<Title>
				<h2 style={{ margin: '0', padding: '0' }}>
					<FontAwesomeIcon icon={["fas", "exchange-alt"]} /> &nbsp; Forex
				</h2>
				</Title>
				<List
					className="list-scroll"
					ref={scrollRef}
				>
					{pairs.slice(0, 20).map((pair) => (
						<Card key={pair} pair={pair} onClick={getForexChart}>
							<br/>
							{/* <img src={"https://www.countryflags.io/eu/flat/32.png"}/> */}
							<h2>
								<span role="img" aria-label="euro">💶</span>
							</h2>
							<br/>
							<h2>
								euro 
								<br/>
								→ <span className="cardTicker">{pair[0].toLowerCase()}</span>
							</h2>
							<p style={{ height: '75px'}}>{forex[pair[0]].toLowerCase()}</p>
							<h3>
								<b>€</b> {pair[1].toFixed(2)}
							</h3>
						</Card>
					))}
				</List>
			</div>
		);
	};
};

export default ForexList;
