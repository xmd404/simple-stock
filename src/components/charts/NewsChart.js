import React, { useEffect, useRef, useState } from 'react';
import { Title, List, NewsCard, Headline, Tint, Thumbnail, Logo } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { symbols, Loading, loadVideoChart } from '../../utility';
import axios from 'axios';

library.add(far);

const NewsChart = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [articles, setArticles] = useState([]);
	const scrollRef = useRef("myscroll");
	// fetch data from api
	useEffect(() => {
		axios
			.get(
					`https://stocknewsapi.com/api/v1?tickers=${window.location.href.split("/")[6]}&items=20&token=${process.env.REACT_APP_NEWS_API_KEY}&sortby=trending&type=video`
				)
				.then(res => {
					setArticles(Object.values(res.data));
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
					<h2>
						<FontAwesomeIcon icon={["far", "newspaper"]} /> &nbsp; News
					</h2>
				</Title>
				<List
					className="list-scroll"
					ref={scrollRef}
					id="news-list-chart"
				>
					{articles[0].map((article) => (
						<a
							key={article.date}
							article={article}
							href={article.news_url}
							target="_blank"
							rel="noopener noreferrer"
							onClick={loadVideoChart}
						>
							<NewsCard article>
									<Headline>
										<br/>
										<Logo src={`../assets/${article.source_name.toLowerCase().split(' ', 2)[0]}_logo.png`} style={{ display: 'block', margin: '5px 0 0' }}/>
										{/* <p>
											<b>
												{`${article.source_name.toLowerCase().split(' ', 2)[0]}`}
												${article.source_name.toLowerCase().split(' ', 2)[1]}`.split('undefined')
											</b>
										</p> */}
										<br/>
										<p>{article.date.substring(0, 16)}</p>
										<br/>
										<b>
											<p style={{ height: '100px' }}>{article.title.substring(0, 105)}</p>
										</b>
										<br/>
										<span style={{ marginRight: '10px', padding: '4px 8px', color: '#000', backgroundColor: '#fff', borderRadius: '5px', borderColor: 'none' }}>
											{`${article.tickers[0]}`}
										</span>
										{/* <span style={{ padding: '4px 8px', color: '#000', backgroundColor: '#fff', borderRadius: '5px', borderColor: 'none' }}>
											{`${article.tickers[1]}`.split('undefined')}
										</span> */}
									</Headline>
									<br/><br/>
							</NewsCard>
						</a>
					))}
				</List>
			</div>
		);
	};
};

export default NewsChart;
