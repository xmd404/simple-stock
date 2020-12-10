import React, { useState, useEffect } from 'react';
import { Title, List, NewsCard, Headline } from './components';
import { symbols, Loading } from '../../utility';
import axios from 'axios';

const Articles = () => {
    // set state
    const [error, setError] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [articles, setArticles] = useState({});
    // fetch data from api
    useEffect(() => {
        axios
            .get(
                `https://api.currentsapi.services/v1/latest-news?language=us&apiKey=${process.env.REACT_APP_CURRENT_NEWS_KEY}`
            )
            .then(res => {
                setArticles(res.json().news);
                console.log({ articles });
                setLoaded(true);
            })
            .catch(err => {
                setError(true);
                console.log(err);
            });
    }, []);
    // return error, loading, or success state
    if (error) {
        return <div></div>;
    } else if (!isLoaded) {
        return <Loading />;
    } else {
        return (
            <div>
                <Title>
                    <h1 style={{ margin: '0', padding: '0' }}>Articles</h1>
                </Title>
                <List
                    className="list-scroll"
                >
                    {articles.map((article) => (
                        <a
                            key={article.id}
                            article={article}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <NewsCard article>
                                {/* <Thumbnail src={article.urlToImage} /> */}
                                <Headline>
                                    <br/>
                                    <b>
                                        <p style={{ height: '100px' }}>{article.title.substring(0, 105)}</p>
                                    </b>
                                    {/* <p>{article.publishedAt.substring(0, 16).replace(regex, ' @ ')}</p> */}
                                    <p>
                                        <u>{article.author.toLowerCase()}</u>
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

export default Articles;