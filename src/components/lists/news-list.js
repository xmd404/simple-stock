import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { error, symbols, getDateTime, Loading } from '../../utility';

const Title = styled.div`padding: 0 1.25em;`;

const List = styled.div`
	margin: 1.75em 0.75em;
	padding: 0 20px;
	overflow: auto;
	white-space: nowrap;
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
	height: 175px;
	width: 100%;
	border-radius: 5% 5% 0 0;
	padding: 0;
`;

class News extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			articles: [],
		};
	}

	componentDidMount() {
		console.time('Fetching news');
		axios.get(
				`https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env
					.REACT_APP_STOCK_API_KEY}&symbols=${symbols}&types=quote,news`
			)
			.then((response) => {
				let data = response.data;
				let articlesArr = Object.values(data);
				let articles = articlesArr;
				this.setState({
					articles: articles,
					isLoaded: true
				});
				console.timeEnd('Fetching news');
				console.log({ articles }, response.status);
			})
			.catch(error());
	}

	render() {
		const { error, isLoaded, articles } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <Loading />;
		} else {
			return (
				<div>
					<List>
						{articles.map((article) => (
							<a
								key={article.quote.symbol}
								article={article}
								href={article.news[0].url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<ListItem>
									<Image src={article.news[0].image} onError="this.onerror=null; this.src='data:image/png;base64,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';" />
									<Title>
										<p>{getDateTime(article.news[0].datetime)}</p>
										<b>
											<p style={{ height: '100px' }}>{article.news[0].headline.toLowerCase().substring(0, 105)}</p>
										</b>
										<p>
											<u>{article.news[0].source.toLowerCase()}</u>
										</p>
									</Title>
								</ListItem>
							</a>
						))}
					</List>
				</div>
			);
		}
	}
}

export default News;
