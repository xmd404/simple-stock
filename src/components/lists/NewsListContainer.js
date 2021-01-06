import React, { useEffect, useState } from 'react';
import { symbols, Loading, corsProxy } from '../../utility';
import axios from 'axios';
import ArticlesContainer from './ArticlesListContainer';
import NewsList from './NewsList';
import { Title } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);

const NewsListContainer = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [news, setNews] = useState([]);
	const [newsType, setNewsType] = useState('video');
	// fetch data from api
	useEffect(() => {
		axios
			.get(`https://stocknewsapi.com/api/v1?tickers=${symbols}&items=20&token=${process.env.REACT_APP_NEWS_API_KEY}&type=${newsType}`)
				.then(res => {
					setNews(Object.values(res.data));
					setLoaded(true);
				})
				.catch(err => {
					setError(true);
					console.log(err);
				});
	}, []);
	const handleChange = () => {
		setNewsType(`${document.getElementById('selectMenu').value}`);
		console.log(newsType);
		console.log(`${document.getElementById('selectMenu').value}`);
	};
	// render error, loading, or success state
	if (error) {
		return <ArticlesContainer />;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<div>
				<Title style={{ padding: '0 20px 0 0' }}>
					<h2 style={{ float: 'left', width: '50%', textAlign: 'left' }}>
						<FontAwesomeIcon icon={["far", "newspaper"]} /> &nbsp; News
					</h2>
					{/* <select value={newsType} onChange={handleChange} id="selectMenu"
					style={{ float: 'right', width: 'auto', textAlign: 'right', padding: '3px 6px', backgroundColor: 'transparent', color: '#fff', borderColor: '#fff' }}>
						<option value="video">Videos</option>
						<option value="article">Articles</option>
					</select> */}
				</Title>
				<br/><br/>
				<NewsList news={news} />
			</div>
		);
	};
};

export default NewsListContainer;
