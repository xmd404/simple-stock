import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { error, symbols, getMarketMessage, Loading } from '../../utility';

const Header = styled.div`
	overflow-x: none;
	margin: 0;
	padding: 35px 0 25px 50px;
	text-align: left;
`;

const List = styled.div`
	margin: 1.75em 0.75em;
	padding: 0 20px;
	overflow: auto;
	white-space: nowrap;
	text-align: center;
`;

const ListItem = styled.div`
  white-space: normal;
  display: inline-block;
  width: 250px;
  margin 0 1.75em 0 0;
  padding: 0;
  color: #FFF;
  background-color: #17141d;
  border-radius: 6%;
  box-shadow: 0px 1px 25px rgba(0,0,0,0.1);
`;

const Image = styled.img`
	height: 35px;
	margin: 20px 0;
`;

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
				let data = response.data;
				let stocksArr = Object.values(data);
				let stocks = stocksArr;
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
					<Header>
						<h1 style={{ margin: '0', padding: '0' }}>stocks</h1>
						<p style={{ margin: '0', padding: '0' }}>
							bullish, markets are &nbsp;
							<b>{getMarketMessage(stocks[0].quote.calculationPrice)}</b>
							&nbsp; 💹
						</p>
					</Header>
					<List>
						{stocks.splice(0, 7).map((stock) => (
							<ListItem key={stock.quote.symbol} stock={stock}>
								<b>
									<h2>{stock.quote.symbol.toLowerCase()}</h2>
								</b>
								<p>{stock.quote.companyName.toLowerCase()}</p>
								<Image src={`https://storage.googleapis.com/iex/api/logos/${stock.quote.symbol}.png`} />
								<h3>${stock.quote.latestPrice}</h3>
								<p>
									H: ${stock.quote.week52High}
									&nbsp;|&nbsp; L: ${stock.quote.week52Low}
								</p>
							</ListItem>
						))}
					</List>
				</div>
			);
		}
	}
}

export default StockList;
