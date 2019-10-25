import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { error, pairs, Loading } from '../../utility';

const Header = styled.div`
	overflow-x: none;
	margin: 0;
	padding: 2.75em;
	color: #fff;
	background-color: #000;
	text-align: center;
`;

const List = styled.div`
	margin: 0;
	padding: 0 25px;
	color: #fff;
	background-color: #000;
	overflow: auto;
	white-space: nowrap;
	text-align: center;
`;

const ListItem = styled.div`
	display: inline-block;
	width: 250px;
	margin: 1.75em 1.35em;
	padding: 0;
	color: #000;
	background-color: #fff;
	border-radius: 6%;
	box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.1);
`;

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
		axios
			.get(`https://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FOREX_API_KEY}&symbols=${pairs}`)
			.then((response) => {
				let data = response.data;
				let pairs = Object.entries(data.rates);
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
					<Header>
						<h2 style={{ margin: '0', padding: '0' }}>
							<b>Forex</b>
						</h2>
						<p style={{ margin: '0', padding: '0' }}>
							Top <b>currency pairs</b> from across the &nbsp;🌎
						</p>
					</Header>
					<List>
						{pairs.slice(0, 7).map((pair) => (
							<ListItem key={pair} pair={pair}>
								<h2>EUR / {pair[0]}</h2>
								<h4>
									<b>€</b> {pair[1].toFixed(2)}
								</h4>
							</ListItem>
						))}
					</List>
				</div>
			);
		}
	}
}

export default ForexList;
