import React, { useRef } from 'react';
import { Title, List, Card, Logo } from './components';
import Tips from '../miscellaneous/tips';
import { getMarketMessage, showStockChart } from '../../utility';

const StockList = ({ stocks }) => {
    // set state
    const scrollRef = useRef("myscroll");
    // render list
    return (
        <>
            <br/>
            <p style={{ margin: '0', padding: '0', textAlign: 'center'}}>
                Markets are&nbsp;
                <b>{getMarketMessage(stocks[0].quote.calculationPrice)}</b>.
            </p>
            <Tips />
            <Title>
                <h2 style={{ margin: '0', padding: '0' }}>
                    Stocks
                </h2>
            </Title>
            <List
                className="list-scroll"
                ref={scrollRef}
            >
                {stocks.map((stock) => (
                    <Card key={stock.quote.symbol} stock={stock} onClick={showStockChart}>
                        <Logo src={`https://storage.googleapis.com/iex/api/logos/${stock.quote.symbol}.png`} />
                        <b>
                            <h2 className="cardTicker">{stock.quote.symbol.toLowerCase()}</h2>
                        </b>
                        <p style={{ height: '75px'}}>
                            {stock.quote.companyName.toLowerCase().split(' ', 2)[0] + ' ' + stock.quote.companyName.toLowerCase().split(' ', 2)[1]}
                        </p>
                        <h3>${stock.quote.latestPrice}</h3>
                    </Card>
                ))}
            </List>
        </>
    );
};

export default StockList;