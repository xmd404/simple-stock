import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { List, NewsCard, Headline } from './components';
import { corsProxy, Loading } from '../../utility';
import axios from 'axios';

library.add(fab);

const LatestFromReddit = () => {
    // set state
    const [error, setError] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const scrollRef = useRef("myscroll");
    // fetch data from api
    useEffect(() => {
        axios
            .get(`${corsProxy}https://www.reddit.com/r/${window.location.href.split("/")[6]}/hot.json`)
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
                <div style={{ padding: '0 0 0 20px' }}>
                    <h2>
                        Social Ramblings
                    </h2>
                    <br/>
                </div>
                <List
					className="list-scroll"
					ref={scrollRef}
				>
                    {posts.map(post =>
                        <a
                            key={post.data.selftext}
                            post={post}
                            href={post.data.url}
                            target="_blank"
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
                                        via <FontAwesomeIcon icon={["fab", "reddit"]} style={{ color: 'rgb(236, 84, 40)' }} /> Reddit
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