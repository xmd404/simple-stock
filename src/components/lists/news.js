import React, { useEffect, useRef, useState } from 'react';
import { List, NewsCard, Headline, Tint, Thumbnail } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { symbols, Loading, corsProxy } from '../../utility';
import axios from 'axios';

library.add(fab, far, faCheckSquare, faCoffee);

const News = () => {
	// set state
	const [error, setError] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [articles, setArticles] = useState([]);
	const scrollRef = useRef("myscroll");
	// fetch data from api
	useEffect(() => {
		axios
			.get(
					`${corsProxy}https://stocknewsapi.com/api/v1?tickers=${symbols}&items=20&token=${process.env.REACT_APP_NEWS_API_KEY}&sortby=trending&type=video`
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
				<b>
                    <h2 style={{ textAlign: 'center' }}>
                        <FontAwesomeIcon icon={["far", "newspaper"]} /> &nbsp; Breaking News
                    </h2>
                </b>
				<List
					className="list-scroll"
					ref={scrollRef}
				>
					{articles[0].map((article) => (
						<a
							key={article.date}
							article={article}
							href={article.news_url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<NewsCard style={{ backgroundImage: `url(${article.image_url})` }} article>
								<Tint>
									<Headline>
										<br/>
										<p>{article.date.substring(0, 16)}</p>
										<br/>
										<b>
											<p style={{ height: '100px' }}>{article.title.substring(0, 105)}</p>
										</b>
										<br/>
										<p>
											<u>{article.source_name.toLowerCase()}</u>
										</p>
									</Headline>
									<br/>
								</Tint>
							</NewsCard>
						</a>
					))}
				</List>
			</div>
		);
	};
};

export default News;
