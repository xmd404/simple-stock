import React, { useEffect, useRef, useState } from 'react';
import { List, NewsCard, Headline, Thumbnail } from './components';
import { error, symbols, Loading } from '../../utility';
import axios from 'axios';

const NewsChart = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [company, setCompany] = useState({});
	const [ticker, setTicker] = useState(window.location.href.split("/")[5]);
	// fetch data from api
	useEffect(() => {
		axios
			.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${window.location.href.split("/")[6]}&apikey=${process.env.REACT_APP_ALPHA_API_KEY}`)
				.then(res => {
					let company = res.data;
					console.log(res.data);
					setCompany(company);
					setLoaded(true);
				})
				.catch(err => {
					console.log(err);
					setError(true);
				});
	}, []);
	// render error, loading, or success state
	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<div>
				<h5>{company.Exchange} &nbsp; &middot; &nbsp; {company.Country} &nbsp; &middot; &nbsp; {company.Industry}</h5>
				<p>{company.Description}</p>
			</div>
		);
	};
;}

export default NewsChart;
