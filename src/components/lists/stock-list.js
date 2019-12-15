import React, { Component } from 'react';
import { List, Title, Card, Logo } from '../list';
import { error, symbols, getMarketMessage, Loading } from '../../utility';
import axios from 'axios';

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
				let stocks = Object.values(response.data);
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
					<Title>
						<h1 style={{ margin: '0', padding: '0' }}>Stocks</h1>
						<p style={{ margin: '0', padding: '0' }}>
							markets are&nbsp;
							<b>{getMarketMessage(stocks[0].quote.calculationPrice)}</b>
							&nbsp; 💹
						</p>
					</Title>
					<List>
						{stocks.splice(0, 10).map((stock) => (
							<Card key={stock.quote.symbol} stock={stock}>
								<b>
									<h2>{stock.quote.symbol.toLowerCase()}</h2>
								</b>
								<p>{stock.quote.companyName.toLowerCase()}</p>
								<Logo src={`https://storage.googleapis.com/iex/api/logos/${stock.quote.symbol}.png`} />
								<h3>${stock.quote.latestPrice}</h3>
								<p>
									H: ${stock.quote.week52High}
									&nbsp;|&nbsp; L: ${stock.quote.week52Low}
								</p>
								<br/>
							</Card>
						))}
					</List>
				</div>
			);
		}
	}
}

export default StockList;
