import React from 'react';
import { ChartCard, Logo } from '../components';
import { capitalize } from '../../utility';
import CoinRating from '../CoinRating';
import CryptoChartWidget from '../CryptoChartWidget';

const CryptoChart = ({ crypto }) =>
    <div>
        <ChartCard key={crypto.symbol}>
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
                <br/>
                <br/>
                <span style={{ padding: '8px 24px', color: '#fff', backgroundColor: 'rgb(69, 119, 197', borderRadius: '5px', borderColor: 'none' }}>
                    Analyze
                </span>
            </div>
            <br/>
        </ChartCard>
        <CryptoChartWidget />
        <br/><br/>
        <div>
            <div style={{ padding: '0 0 0 20px' }}>
                <h2>What is {capitalize(crypto.id)}?</h2>
            </div>
            <br/>
        </div>
        <ChartCard>
            <p>{`${crypto.description.en.replace(/<.*>/g, '')}`}</p>
        </ChartCard>
    </div>

export default CryptoChart;