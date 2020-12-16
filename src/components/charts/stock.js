import React, { useState, useEffect } from 'react';
import { Container, Card, Logo } from './components';
import { Loading } from '../../utility';
import CompanyInfo from './company-info';
import { ViewMoreButton } from '../miscellaneous/buttons';
import LatestFromReddit from '../news/reddit';
import News from '../charts/news';
import axios from 'axios';
import { getStockChart } from '../../api';

const StockChart = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [stocks, setStocks] = useState([]);
	// fetch data from api
	useEffect(() => {
		axios
			.get(getStockChart)
				.then(res => {
					setStocks(Object.values(res.data));
					setLoaded(true);
				})
				.catch(err => {
					setError(true);
					console.log(err);
				});
	}, []);
	// return error, loading, or success state
	if (error) {
		return <div></div>;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<Container>
				{stocks.slice(0, 20).map((stock) => (
					<Card key={stock.quote.symbol} stock={stock}>
						<div style={{ float: 'left', width: '50%' }}>
							<Logo src={`https://storage.googleapis.com/iex/api/logos/${stock.quote.symbol}.png`} />
							<b>
								<h2 className="cardTicker">{stock.quote.symbol.toLowerCase()}</h2>
							</b>
							<p style={{ height: '75px'}}>{stock.quote.companyName.toLowerCase().split(', inc.')}</p>
						</div>
						<div style={{ float: 'right', width: '50%', textAlign: 'right' }}>
							<br/>
							<h2>${stock.quote.latestPrice}</h2>
						</div>
					</Card>
				))}
				<CompanyInfo />
				<br/>
				<News />
				<LatestFromReddit />
				<ViewMoreButton />
			</Container>
		);
	};
};

export default StockChart;
