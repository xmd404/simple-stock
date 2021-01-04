import React, { useEffect, useRef, useState } from 'react';
import { List, NewsCard, Headline } from './components';
import { corsProxy, Loading } from '../../utility';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

let CryptoNews = () => {
    // init state
    const [error, setError] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [newsArray, setNews] = useState({});
    const scrollRef = useRef("myscroll");
    // fetch data from api
    useEffect(() => {
        axios
            .get(`${corsProxy}https://cryptopanic.com/api/v1/posts/?auth_token=${process.env.REACT_APP_CRYPTO_NEWS_KEY}&currencies=${window.location.href.split("/")[7]}&public=true`)
                .then(res => {
                    console.log(res.data.results);
                    setNews(res.data.results);
                    setLoaded(true);
                })
                .catch(err => {
                    console.log(err);
                    setError(true);
                });
    }, []);
    // render error, loading, and success screens
    if (error) {
        return <p>Error: {error.message}</p>
    } else if (!isLoaded) {
        return <Loading />
    } else {
        return (
            <div>
                <div style={{ padding: '0 0 0 20px' }}>
                    <h2>
                        <FontAwesomeIcon icon={["fas", "file-alt"]} /> &nbsp; Other News
                    </h2>
                </div>
                <br/>
                <List
					className="list-scroll"
					ref={scrollRef}
				>
					{newsArray.map((news) => (
						<a
							key={news.id}
							news={news}
							href={news.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<NewsCard news>
								<Headline>
									{/* <p>{news.date.substring(0, 16)}</p> */}
                                    <br/>
									<b>
										<p style={{ height: '100px' }}>{news.title.substring(0, 105)}</p>
									</b>
									<br/>
									<p>
										<u>{news.domain.toLowerCase()}</u>
									</p>
								</Headline>
								<br/>
							</NewsCard>
						</a>
					))}
				</List>
            </div>
        );
    };
};

export default CryptoNews;