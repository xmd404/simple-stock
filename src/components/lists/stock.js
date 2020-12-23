import React, { useEffect, useRef, useState } from 'react';
import { List, Title, Card, Logo } from './components';
import { symbols, getMarketMessage, getStockChart, Loading, shuffle, corsProxy } from '../../utility';
import axios from 'axios';
import Tips from '../miscellaneous/tips';
import { getStockList, testStockList } from '../../api';

const StockList = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [stocks, setStocks] = useState([]);
	const scrollRef = useRef("myscroll");
	// fetch data from api
	useEffect(() => {
		axios
			.get(testStockList)
				.then(res => {
					setStocks(shuffle(Object.values(res.data)));
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
				<br/>
				<p style={{ margin: '0', padding: '0', textAlign: 'center'}}>
					Markets are&nbsp;
					<b>{getMarketMessage(stocks[0].quote.calculationPrice)}</b>.
				</p>
				<Tips />
				<Title>
					<h2 style={{ margin: '0', padding: '0' }}>
						Stocks
					</h2>
				</Title>
				<List
					className="list-scroll"
					ref={scrollRef}
				>
					{stocks.map((stock) => (
						<Card key={stock.quote.symbol} stock={stock} onClick={getStockChart}>
							<Logo src={`https://storage.googleapis.com/iex/api/logos/${stock.quote.symbol}.png`} />
							<b>
								<h2 className="cardTicker">{stock.quote.symbol.toLowerCase()}</h2>
							</b>
							<p style={{ height: '75px'}}>
								{stock.quote.companyName.toLowerCase().split(' ', 2)[0] + ' ' + stock.quote.companyName.toLowerCase().split(' ', 2)[1]}
							</p>
							<h3>${stock.quote.latestPrice}</h3>
						</Card>
					))}
				</List>
			</div>
		);
	};
};

export default StockList;
