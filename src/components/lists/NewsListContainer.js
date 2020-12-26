import React, { useEffect, useState } from 'react';
import { symbols, Loading, corsProxy } from '../../utility';
import axios from 'axios';
import ArticlesContainer from './ArticlesListContainer';
import NewsList from './NewsList';

const NewsListContainer = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [news, setNews] = useState([]);
	// fetch data from api
	useEffect(() => {
		axios
			.get(`${corsProxy}https://stocknewsapi.com/api/v1?tickers=${symbols}&items=20&token=${process.env.REACT_APP_NEWS_API_KEY}&sortby=trending&type=video`)
				.then(res => {
					setNews(Object.values(res.data));
					setLoaded(true);
				})
				.catch(err => {
					setError(true);
					console.log(err);
				});
	}, []);
	// render error, loading, or success state
	if (error) {
		return <ArticlesContainer />;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<NewsList news={news} />
		);
	};
};

export default NewsListContainer;
