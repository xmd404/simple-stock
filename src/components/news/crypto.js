import React, { useEffect, useRef, useState } from 'react';
import { List, NewsCard, Headline } from './components';
import { Loading } from '../../utility';
import axios from 'axios';

let CryptoNews = () => {
    // init state
    const [error, setError] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [newsArray, setNews] = useState({});
    const scrollRef = useRef("myscroll");
    // fetch data from api
    const corsProxy = 'https://my-little-cors-proxy.herokuapp.com/'
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
                <b>
                    <p style={{ textAlign: 'center' }}>
                        Other News
                    </p>
                </b>
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