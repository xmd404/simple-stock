import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { error, pairs, Loading } from '../../utility';

const Header = styled.div`
	overflow-x: none;
	margin: 0;
	padding: 35px 35px 20px;
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
						<h3 style={{ margin: '0', padding: '0' }}>
							<b>Forex</b>: &nbsp; Top <b>currency pairs</b> across the &nbsp;🌎
						</h3>
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
