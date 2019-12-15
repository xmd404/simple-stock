import React, { Component } from 'react';
import { List, Title, Card, Logo } from '../list';
import { error, Loading } from '../../utility';
import axios from 'axios';

class CryptoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			cryptos: []
		};
	}

	componentDidMount() {
		console.time('Fetching cryptos');
		axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false
      `)
			.then((response) => {
				let cryptos = response.data;
				this.setState({
					cryptos: cryptos,
					isLoaded: true
				});
				console.timeEnd('Fetching cryptos');
				console.log({ cryptos }, response.status);
			})
			.catch(error());
	}

	render() {
		const { error, isLoaded, cryptos } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <Loading />;
		} else {
			return (
				<div>
					<Title>
						<h1 style={{ margin: '0', padding: '0' }}>Crypto</h1>
					</Title>
					<List
						className="App"
						ref="myscroll"
					>
						{cryptos.splice(0, 10).map((crypto) => (
							<Card key={crypto.symbol} crypto={crypto}>
								<b>
									<h2>{crypto.symbol}</h2>
								</b>
                <p>{crypto.id}</p>
                <Logo src={crypto.image} />
                <h3>${crypto.current_price.toFixed(2)}</h3>
                <p>
									H: ${crypto.high_24h.toFixed(2)}
									&nbsp;|&nbsp; L: ${crypto.low_24h.toFixed(2)}
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

export default CryptoList;
