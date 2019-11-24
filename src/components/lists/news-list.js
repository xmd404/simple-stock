import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { error, symbols, Loading } from '../../utility';

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
				`https://stocknewsapi.com/api/v1?tickers=${symbols}&items=50&token=${process.env.REACT_APP_NEWS_API_KEY}&sortby=trending&sentiment=positive&type=video`
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
						{articles[0].slice(0, 25).map((article) => (
							<a
								key={article.date}
								article={article}
								href={article.news_url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<ListItem>
									<Image src={article.image_url} />
									<Title>
										<p>{article.date.substring(0, 16)}</p>
										<b>
											<p style={{ height: '100px' }}>{article.title.substring(0, 105)}</p>
										</b>
										<p>
											<u>{article.source_name.toLowerCase()}</u>
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
