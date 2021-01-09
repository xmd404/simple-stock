 axios
    .get(`${corsProxy}https://api.twitter.com/1.1/search/tweets.json?q=${window.location.href.split("/")[6]}&result_type=popular`, { 
            headers: { 
                Authorization: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}` 
            }
        })
        .then(res => {
            setPosts(res.data.statuses);
            setLoaded(true);
        })
        .catch(err => {
            console.log(err);
            setError(true);
        });