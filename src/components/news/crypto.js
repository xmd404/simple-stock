import React, { useEffect, useRef, useState } from 'react';
import { List, NewsCard, Headline, Thumbnail } from './components';
import { symbols, Loading } from '../../utility';
import axios from 'axios';

let CryptoNews = () => {
    // init state
    const [error, setError] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [newsArray, setNews] = useState({});
    const scrollRef = useRef("myscroll");
    // fetch data from api
    useEffect(() => {
        axios
            .get(`https://cryptopanic.com/api/v1/posts/?auth_token=694796c907073a435fc55884ece1f1dca7e7ad58&currencies=${window.location.href.split("/")[7]}`)
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