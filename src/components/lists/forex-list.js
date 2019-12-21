import React, { Component } from 'react';
import { List, Title, Card } from '../list';
import { error, pairs, Loading } from '../../utility';
import axios from 'axios';

class ForexList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			pairs: []
		};
	}

	componentWillMount() {
		console.time('Fetching forex');
		axios.get(
			`https://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FOREX_API_KEY}&symbols=${pairs}`
			)
			.then((response) => {
				let pairs = Object.entries(response.data.rates);
				this.setState({
					pairs: pairs,
					isLoaded: true
				});
				console.timeEnd('Fetching forex');
				console.log({ pairs }, response.status);
			})
			.catch(error());
	}

	render() {
		const { error, isLoaded, pairs } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <Loading />;
		} else {
			return (
				<div>
					<Title>
						<h1 style={{ margin: '0', padding: '0' }}>Forex</h1>
					</Title>
					<List>
						{pairs.slice(0, 10).map((pair) => (
							<Card key={pair} pair={pair}>
								<br/>
								<h2>eur / {pair[0].toLowerCase()}</h2>
								<h3>
									<b>€</b> {pair[1].toFixed(2)}
								</h3>
							</Card>
						))}
					</List>
				</div>
			);
		}
	}
}

export default ForexList;
