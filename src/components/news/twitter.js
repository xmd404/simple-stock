import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { List, NewsCard, Headline } from './components';
import { corsProxy, Loading } from '../../utility';
import axios from 'axios';

library.add(fab);

const LatestFromTwitter = () => {
    // set state
    const [error, setError] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const scrollRef = useRef("myscroll");
    // fetch data from api
    useEffect(() => {
        axios
            .get(
                `http://api.twitter.com/2/tweets/search/recent?query=${window.location.href.split("/")[7]} stock`,
                { headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}` } }
                )
                .then(res => {
                    setPosts(res.data);
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
                <b>
                    <h2 style={{ textAlign: 'center' }}>
                        Latest from &nbsp;<FontAwesomeIcon icon={["fab", "twitter"]} /> Twitter
                    </h2>
                </b>
                <br/>
                <List
					className="list-scroll"
					ref={scrollRef}
				>
                    {posts.map(post =>
                        <a
                            key={post.data.id}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <NewsCard post>
                                <Headline>
                                    <br/>
									<b>
										<p style={{ height: '100px' }}>{post.data.text.substring(0, 105)}</p>
									</b>
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

export default LatestFromTwitter;