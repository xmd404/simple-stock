import React from 'react';
import { Card, Logo } from './components';

let StockChart = ({ stocks }) =>
    stocks.slice(0, 20).map((stock) => (
        <Card key={stock.quote.symbol}>
            <div style={{ float: 'left', width: '50%' }}>
                <Logo src={`https://storage.googleapis.com/iex/api/logos/${stock.quote.symbol}.png`} />
                <b>
                    <h2 className="cardTicker">{stock.quote.symbol.toLowerCase()}</h2>
                </b>
                <p style={{ height: '75px'}}>{stock.quote.companyName.toLowerCase().split(', inc.')}</p>
            </div>
            <div style={{ float: 'right', width: '50%', textAlign: 'right' }}>
                <br/>
                <h2>${stock.quote.latestPrice}</h2>
            </div>
        </Card>
    ));

export default StockChart;