import React, { useEffect, useRef, useState } from 'react';
import { List, NewsCard, Headline, Thumbnail } from './components';
import { error, symbols, Loading } from '../../utility';
import axios from 'axios';

const NewsChart = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [articles, setArticles] = useState([]);
	const [ticker, setTicker] = useState(window.location.href.split("/")[5]);
	const scrollRef = useRef("myscroll");
	// fetch data from api
	useEffect(() => {
		axios
			.get(`https://stocknewsapi.com/api/v1?tickers=${window.location.href.split("/")[6]}&items=10&token=${process.env.REACT_APP_NEWS_API_KEY}`)
				.then(res => {
					let articles = Object.values(res.data);
					setArticles(articles);
					setLoaded(true);
				})
				.catch(err => {
					console.log(err);
					setError(true);
				});
	});
	// render error, loading, or success state
	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<div>
				<List
					className="list-scroll"
					ref={scrollRef}
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
	};
;}

export default NewsChart;
