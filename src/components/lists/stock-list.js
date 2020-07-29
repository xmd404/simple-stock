import React, { Component } from 'react';
import { List, Title, Card, Logo } from '../list';
import { error, symbols, getChart, getMarketMessage, Loading, shuffle } from '../../utility';
import axios from 'axios';
import Tips from '../tips';

class StockList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			stocks: [],
		};
	}

	componentWillMount() {
		console.clear();
		console.time('Fetching stocks');
		axios.get(
				`https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env
					.REACT_APP_STOCK_API_KEY}&symbols=${symbols}&types=quote,news`
			)
			.then((response) => {
				let unsorted = Object.values(response.data);
				let stocks = shuffle(unsorted);
				this.setState({
					stocks: stocks,
					isLoaded: true,
				});
				console.timeEnd('Fetching stocks');
				console.log({ stocks }, response.status);
			})
			.catch(error());
	}

	render() {
		const { error, isLoaded, stocks } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
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
						<h1 style={{ margin: '0', padding: '0' }}>Stocks</h1>
					</Title>
					<List
						className="list-scroll"
						ref="myscroll"
					>
						{stocks.map((stock) => (
							<Card key={stock.quote.symbol} stock={stock} onClick={getChart}>
								<Logo src={`https://storage.googleapis.com/iex/api/logos/${stock.quote.symbol}.png`} />
								<b>
									<h2 className="cardTicker">{stock.quote.symbol.toLowerCase()}</h2>
								</b>
								<p style={{ height: '75px'}}>{stock.quote.companyName.toLowerCase().split(', inc.')}</p>
								<h3>${stock.quote.latestPrice}</h3>
							</Card>
						))}
					</List>
				</div>
			);
		}
	}
}

export default StockList;
