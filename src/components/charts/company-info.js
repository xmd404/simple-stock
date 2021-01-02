import React, { useEffect, useState } from 'react';
import { Container, ChartCard } from '../components';
import { Loading } from '../../utility';
import axios from 'axios';

const CompanyInfo = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [company, setCompany] = useState({});
	// fetch data from api
	useEffect(() => {
		axios
			.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${window.location.href.split("/")[6]}&apikey=${process.env.REACT_APP_ALPHA_API_KEY}`)
				.then(res => {
					setCompany(res.data);
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
			<Container>
				<b>
					<h2 style={{ textAlign : 'center', margin: '0' }}>
						{`${company.Industry.split(' ', 2)[0]} ${company.Industry.split(' ', 2)[1]}`.split('undefined')}
					</h2>
					<p style={{ textAlign : 'center', margin: '0' }}>
						{company.Exchange} &nbsp; &middot; &nbsp; {company.Country}
					</p>
				</b>
				<br/>
				<ChartCard>
					<br/>
					<p>{`${company.Description}`}</p>
				</ChartCard>
				<br/>
			</Container>
		);
	};
};

export default CompanyInfo;
