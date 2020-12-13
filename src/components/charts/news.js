import React, { useEffect, useRef, useState } from 'react';
import { List, NewsCard, Headline, Tint, Thumbnail } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { symbols, Loading } from '../../utility';
import axios from 'axios';

library.add(far);

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
                <b>
                    <p style={{ textAlign: 'center' }}>
                        <FontAwesomeIcon icon={["far", "newspaper"]} /> &nbsp; Breaking News
                    </p>
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
