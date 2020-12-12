import React, { useEffect, useRef, useState } from 'react';
import { List, Title, Card } from './components';
import { Loading, shuffle, getForexChart, corsProxy, forex } from '../../utility';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas, faCheckSquare, faCoffee);


const MetalsList = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [commodities, setCommodities] = useState([]);
	const scrollRef = useRef("myscroll");
	// fetch data from api
	useEffect(() => {
		axios
			.get(
				`${corsProxy}https://public.opendatasoft.com/api/records/1.0/search/?dataset=commodity-prices&q=&facet=date&facet=commodity&refine.date=2016%2F02`
				)
				.then(res => {
                    setCommodities(shuffle(res.data.records));
                    console.log(res.data.records);
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
			<div>
				<Title>
					<h2 style={{ margin: '0', padding: '0' }}>
                        Commodities
                    </h2>
				</Title>
				<List
					className="list-scroll"
					ref={scrollRef}
				>
					{commodities.slice(0, 20).map((commodity) => (
						<Card key={commodity} commodity={commodity}>
							<br/>
							<h2>
                                <span className="cardTicker">
                                    {`${commodity.fields.commodity.toLowerCase().split(' ', 2)[0]}`}
                                </span>
							</h2>
                            <p style={{ height: '75px'}}>{commodity.fields.commodity.toLowerCase()}</p>
							<h3>
								<b>$</b> {commodity.fields.price_index.toFixed(2)}
							</h3>
						</Card>
					))}
				</List>
			</div>
		);
	};
};

export default MetalsList;
