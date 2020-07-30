import React, { Component } from 'react';
import { List, NewsCard, Headline, Thumbnail } from './components';
import { error, symbols, Loading } from '../../utility';
import axios from 'axios';

class NewsChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
            articles: [],
            ticker: window.location.href.split("/")[5],
		};
    }

	componentDidMount() {
		console.time('Fetching news');
		axios.get(
				`https://stocknewsapi.com/api/v1?tickers=${window.location.href.split("/")[6]}&items=10&token=${process.env.REACT_APP_NEWS_API_KEY}`)
			.then((response) => {
				let articles = Object.values(response.data);
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
					<List
						className="list-scroll"
						ref="myscroll"
					>
						{articles[0].map((article) => (
							<a
								key={article.date}
								article={article}
								href={article.news_url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<NewsCard news>
									<Thumbnail src={article.image_url} />
									<Headline>
										<br/>
										<p>{article.date.substring(0, 16)}</p>
										<br/>
										<b>
											<p style={{ height: '100px' }}>{article.title.substring(0, 105)}</p>
										</b>
										<br/>
										<p>
											<u>{article.source_name.toLowerCase()}</u>
										</p>
									</Headline>
									<br/>
								</NewsCard>
							</a>
						))}
					</List>
				</div>
			);
		}
	}
}

export default NewsChart;
