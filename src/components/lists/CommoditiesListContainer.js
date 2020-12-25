import React, { useEffect, useState } from 'react';
import { Loading, shuffle, corsProxy } from '../../utility';
import axios from 'axios';
import CommoditiesList from './CommoditiesList';

const CommoditiesListContainer = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [commodities, setCommodities] = useState([]);
	// fetch data from api
	useEffect(() => {
		axios
			.get(
				`${corsProxy}https://public.opendatasoft.com/api/records/1.0/search/?dataset=commodity-prices&q=&facet=date&facet=commodity&refine.date=2016%2F02`
				)
				.then(res => {
                    setCommodities(shuffle(res.data.records));
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
			<CommoditiesList commodities={commodities} />
		);
	};
};

export default CommoditiesListContainer;
