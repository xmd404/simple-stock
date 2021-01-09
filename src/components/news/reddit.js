import React, { useEffect, useRef, useState } from 'react';
import { List, NewsCard, Headline } from './components';
import { corsProxy, Loading } from '../../utility';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../components';

library.add(fas);

const LatestFromReddit = () => {
    // set state
    const [error, setError] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const scrollRef = useRef("myscroll");
    // fetch data from api
    useEffect(() => {
        axios
            .get(`${corsProxy}https://www.reddit.com/search.json?q=${window.location.href.split("/")[7]},${window.location.href.split("/")[6]}&limit=20`)
                .then(res => {
                    setPosts(res.data.data.children);
                    setLoaded(true);
                })
                .catch(err => {
                    console.log(err);
                    setError(true);
                });
    }, []);
    //
    if (error) {
		return <div></div>
	} else if (!isLoaded) {
		return <Loading />;
	} else {
	    return (
            <div>
                <Title>
                    <h2>
                        <FontAwesomeIcon icon={["fas", "retweet"]} /> &nbsp; Social Media
                    </h2>
                </Title>
                <List
					className="list-scroll"
					ref={scrollRef}
				>
                    {posts.slice(0, 20).map(post =>
                        <a
                            key={post.data.selftext}
                            post={post}
                            href={post.data.url}
                            target="browser"
                            rel="noopener noreferrer"
                        >
                            <NewsCard post>
                                <Headline>
                                    <br/>
									<b>
										<p style={{ height: '100px' }}>{post.data.title.substring(0, 105)}</p>
									</b>
									<br/>
									<p>
                                        <u>{post.data.domain}</u>
                                        <br/>
                                        via &nbsp;<FontAwesomeIcon icon={["fab", "reddit"]} style={{ color: 'rgb(236, 84, 40)' }} /> <b>Reddit</b>
									</p>
                                    <br/>
                                </Headline>
                            </NewsCard>
                        </a>
                    )}
                </List>
            </div>
        );
    };
};

export default LatestFromReddit;