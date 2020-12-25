import React, { useEffect, useState } from 'react';
import { Loading, shuffle } from '../../utility';
import axios from 'axios';
import { getStockList, testStockList } from '../../api';
import StockList from './StockList';

const StockListContainer = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [stocks, setStocks] = useState([]);
	// fetch data from api
	useEffect(() => {
		axios
			.get(testStockList)
				.then(res => {
					setStocks(shuffle(Object.values(res.data)));
					setLoaded(true);
				})
				.catch(err => {
					setError(true);
					console.log(err);

				});
	}, []);
	// render error, loading, or success state
	if (error) {
		return <div></div>;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<StockList stocks={stocks} />
		);
	};
};

export default StockListContainer;
