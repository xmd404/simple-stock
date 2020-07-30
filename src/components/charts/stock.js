import React, { Component } from 'react';
import { List, Title, Card, Logo } from './components';
import { error, symbols, getStockChart, Loading } from '../../utility';
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
					.REACT_APP_STOCK_API_KEY}&symbols=${window.location.href.split("/")[6]}&types=quote,news`
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
					<br/>
					<News />
					<ViewMoreButton />
				</div>
			);
		}
	}
}

export default StockChart;
