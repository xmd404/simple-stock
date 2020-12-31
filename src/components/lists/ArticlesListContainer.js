import React, { useState, useEffect } from 'react';
import { Loading } from '../../utility';
import axios from 'axios';
import Articles from './ArticlesList';

const ArticlesContainer = () => {
    // set state
    const [error, setError] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [articles, setArticles] = useState({});
    // fetch data from api
    useEffect(() => {
        axios
            .get(
                `https://api.currentsapi.services/v1/search?keywords=stocks&language=en&apiKey=${process.env.REACT_APP_CURRENT_NEWS_KEY}`
            )
            .then(res => {
                setArticles(res.data.news);
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
            <Articles articles={articles} />
        );
    };
};

export default ArticlesContainer;