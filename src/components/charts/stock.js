import React, { Component } from 'react';
import { List, Title, Card, Logo } from '../lists/components';
import { error, symbols, getChart, Loading } from '../../utility';
import { ViewMoreButton } from '../miscellaneous/buttons';
import axios from 'axios';

const ticker = {
	color: 'magenta',
};

const container = {
	margin: '0 auto',
	width: '100%',
	maxWidth: '650px',
	borderRadius: '5%'
};

class StockChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			stocks: []
		};
	}

	componentWillMount() {
		console.clear();
		console.time('Fetching stocks');
		axios
			.get(
				`https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env
					.REACT_APP_STOCK_API_KEY}&symbols=${window.location.href.split("/")[5]}&types=quote,news`
			)
			.then((response) => {
				let stocksObj = response.data;
				let stocksArr = Object.values(stocksObj);
				let stocks = stocksArr;
				this.setState({
					stocks: stocks,
					isLoaded: true
				});
				console.timeEnd('Fetching stocks');
				console.log({ stocks }, response.status);
			})
			.catch(error());
	}

	render() {
		const { error, isLoaded, stocks } = this.state;
		if (error) {
			return <div>Error: error.message</div>;
		} else if (!isLoaded) {
			return <Loading />;
		} else {
			return (
				<div style={container}>
					<Title>
						<h2 style={{ margin: '0', padding: '0' }}>
							<span style={ticker}>{window.location.href.split("/")[5]}</span> news + insights
						</h2>
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
					<ViewMoreButton />
				</div>
			);
		}
	}
}

export default StockChart;
