import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoinRating = ({ symbol }) => {
    // set state
    const [rating, setRating] = useState('')
    // fetch data
    useEffect(() => {
        axios
            .get(`https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=${symbol}&apikey=${process.env.REACT_APP_ALPHA_API_KEY}`)
            .then(res => {
                setRating(res.data['Crypto Rating (FCAS)'][`3. fcas rating`]);
                console.log(rating);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    // render
    if (rating) {
        return (
            <span style={{ padding: '8px 16px', color: 'black', backgroundColor: '#fff', borderRadius: '20px' }}>
                {rating.toLowerCase()}
            </span>
        );
    } else {
        return (
            <div></div>
        );
    };
};

export default CoinRating;