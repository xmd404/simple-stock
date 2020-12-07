import React, { useState, useEffect } from 'react';
import { Title, List, NewsCard, Headline, Thumbnail } from './components';
import { symbols } from '../../utility';
import axios from 'axios';

const regex = /T/gi;

const Articles = () => {
    // const [hasError, setError] = useState(false);
    // const [isLoaded, setLoaded] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_ARTICLES_API_KEY}`)
            .then(res => {
                console.log(res);
                setArticles(res.data.articles);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    
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

export default Articles;