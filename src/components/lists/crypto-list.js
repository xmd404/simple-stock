import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { error, Loading } from '../../utility';

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
					<Header>
						<h1 style={{ margin: '0', padding: '0' }}>Crypto</h1>
						<p style={{ margin: '0', padding: '0' }}>diversify outside the <b>matrix</b>&nbsp;👨🏻‍💻</p>
					</Header>
					<List>
						{cryptos.splice(0, 10).map((crypto) => (
							<ListItem key={crypto.symbol} crypto={crypto}>
								<b>
									<h2>{crypto.symbol}</h2>
								</b>
                <p>{crypto.id}</p>
                <Image src={crypto.image} />
                <h3>${crypto.current_price.toFixed(2)}</h3>
                <p>
									H: ${crypto.high_24h.toFixed(2)}
									&nbsp;|&nbsp; L: ${crypto.low_24h.toFixed(2)}
								</p>
							</ListItem>
						))}
					</List>
				</div>
			);
		}
	}
}

export default CryptoList;
