import React, { useEffect, useState } from 'react';
import { Container, Card } from './components';
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
					let company = res.data;
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
			<Container>
				<b>
					<p style={{ textAlign : 'center' }}>
						{company.Industry}
						<br/>
						{company.Exchange} &nbsp; &middot; &nbsp; {company.Country}
					</p>
				</b>
				<br/>
				<Card>
					<br/>
					<p>{company.Description}</p>
				</Card>
				<br/>
			</Container>
		);
	};
};

export default CompanyInfo;
