import React from 'react';
import { Card, Logo } from './components';
import { capitalize } from '../../utility';

const CryptoChart = ({ crypto }) =>
    <div>
        <Card key={crypto.symbol}>
            <div style={{ float: 'left', width: '50%' }}>
                <Logo src={crypto.image.thumb}/>
                <b>
                    <h2>{crypto.symbol}</h2>
                </b>
                <p className="cardTicker" style={{ height: '75px'}}>{crypto.id}</p>
            </div>
            <div style={{ float: 'right', width: '50%', textAlign: 'right' }}>
                <br/>
                <h2>${crypto.market_data.current_price.usd}</h2>
            </div>
            <br/>
        </Card>
        <div>
            <b>
                <p style={{ textAlign: 'center' }}>What is {capitalize(crypto.id)}?</p>
            </b>
            <br/>
        </div>
        <Card>
            <p>{`${crypto.description.en.replace(/<.*>/g, '').substring(0, 1000)}...`}</p>
        </Card>
    </div>

export default CryptoChart;