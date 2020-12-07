import React, { useState, useEffect } from 'react';
import { List, Title, Card, Logo } from './components';
import { getStockChart, Loading } from '../../utility';
import { ViewMoreButton } from '../miscellaneous/buttons';
import axios from 'axios';
import News from './news';

const ticker = {
	color: 'magenta',
};

const container = {
	margin: '0 auto',
	width: '100%',
	maxWidth: '650px',
	borderRadius: '5%'
};

const StockChart = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [stocks, setStocks] = useState([]);
	// fetch data from api
	useEffect(() => {
		axios
			.get(
				`https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env
					.REACT_APP_STOCK_API_KEY}&symbols=${window.location.href.split("/")[6]}&types=quote,news`
			)
			.then((response) => {
				let stocksObj = response.data;
				let stocksArr = Object.values(stocksObj);
				let stocks = stocksArr;
				setStocks(stocks);
				setLoaded(true);
				console.log({ stocks }, response.status);
			})
			.catch(err => {
				setError(true);
				console.log(err);
			});
	}, []);
	// return error, loading, or success state
	if (error) {
		return <div>Error: error.message</div>;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<div style={container}>
				{stocks.map((stock) => (
					<Card key={stock.quote.symbol} stock={stock} onClick={getStockChart}>
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
				<News />
				<ViewMoreButton />
			</div>
		);
	};
};

export default StockChart;
