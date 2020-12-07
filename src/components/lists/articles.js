import React, { useState, useEffect } from 'react';
import { Title, List, NewsCard, Headline, Thumbnail } from './components';
import { Loading } from '../../utility';
import axios from 'axios';

const Articles = () => {
    // set state
    const [error, setError] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [articles, setArticles] = useState([]);
    // fetch data from api
    useEffect(() => {
        axios
            .get(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_ARTICLES_API_KEY}`)
            .then(res => {
                console.log(res);
                setArticles(res.data.articles);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
                setError(true);
            })
    }, []);
    // return error, loading, or success state
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Loading />;
    } else {
        return (
            <div>
                {/* <Title>
                    <h1 style={{ margin: '0', padding: '0' }}>Articles</h1>
                </Title> */}
                <List
                    className="list-scroll"
                >
                    {articles.map((article) => (
                        <a
                            key={article.url}
                            article={article}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <NewsCard news>
                                {/* <Thumbnail src={article.urlToImage} /> */}
                                <Headline>
                                    <br/>
                                    <b>
                                        <p style={{ height: '100px' }}>{article.title.substring(0, 105)}</p>
                                    </b>
                                    {/* <p>{article.publishedAt.substring(0, 16).replace(regex, ' @ ')}</p> */}
                                    <p>
                                        <u>{article.source.name.toLowerCase()}</u>
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