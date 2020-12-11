import React, { useEffect, useRef, useState } from 'react';
import { List, Title, Card } from './components';
import { Loading, shuffle, getForexChart, corsProxy, forex } from '../../utility';
import axios from 'axios';

const MetalsList = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [metals, setMetals] = useState([]);
	const scrollRef = useRef("myscroll");
	// fetch data from api
	useEffect(() => {
		axios
			.get(
				`${corsProxy}https://metals-api.com/api/latest?access_key=${process.env.REACT_APP_METALS_API_KEY}&base=USD&symbols=XAU%2CXAG%2CXPD%2CXPT%2CXRH`
				)
				.then(res => {
                    setMetals(shuffle(Object.entries(res.data.rates)));
                    console.log(res.data);
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
			<div>
				<Title>
					<h1 style={{ margin: '0', padding: '0' }}>Commodities</h1>
				</Title>
				<List
					className="list-scroll"
					ref={scrollRef}
				>
					{metals.slice(0, 20).map((metal) => (
						<Card key={metal} metal={metal}>
							<br/>
							{/* <img src={"https://www.countryflags.io/eu/flat/32.png"}/> */}
							<h2>
								<span role="img" aria-label="diamond">🗿</span>
							</h2>
							<br/>
							<h2>
                                <span className="cardTicker">{metal[0].toLowerCase()}
                            </span>
							</h2>
							{/* <p style={{ height: '75px'}}>{Metals[metal[0]].toLowerCase()}</p> */}
							<h3>
								<b>$</b> {metal[1].toFixed(5)}
							</h3>
                            <p>per ounce</p>
                            <br/>
						</Card>
					))}
				</List>
			</div>
		);
	};
};

export default MetalsList;
