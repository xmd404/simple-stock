import React, { useState, useEffect } from 'react';
import { Container, RobinhoodLink, ViewMoreButton } from '../components';
import { Loading } from '../../utility';
import CompanyInfo from './company-info';
import LatestFromReddit from '../news/reddit';
import axios from 'axios';
import { getStockChart, testStockChart } from '../../api';
import StockChart from './StockChart.js'
import NewsListContainer from '../lists/NewsListContainer';

const StockChartContainer = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [stocks, setStocks] = useState([]);
	// fetch data from api
	useEffect(() => {
		axios
			.get(getStockChart)
				.then(res => {
					setStocks(Object.values(res.data));
					setLoaded(true);
				})
				.catch(err => {
					setError(true);
					console.log(err);
				});
	}, []);
	// return error, loading, or success state
	if (error) {
		return <div></div>;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<Container>
				<StockChart stocks={stocks} />
				<CompanyInfo />
				<br/>
				<NewsListContainer />
				<LatestFromReddit />
				<RobinhoodLink stocks={stocks} />
			</Container>
		);
	};
};

export default StockChartContainer;
