import React, { useRef } from 'react';
import { Title, List, ListCard, Logo } from '../components';
import { Tips } from '../components';
import { getMarketMessage, showStockChart } from '../../utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const StockList = ({ stocks }) => {
    // set state
    const scrollRef = useRef("myscroll");
    // render list
    return (
        <>
            <div style={{ backgroundColor: 'rgb(14,17,22)', padding: '40px 0 30px' }}>
                <h2 style={{ margin: '0', padding: '0', textAlign: 'center'}}>
                    Markets are&nbsp;
                    <b>{getMarketMessage(stocks[0].quote.calculationPrice)}</b>
                </h2>
                <Tips />
            </div>
            <Title>
                <h2 style={{ margin: '0', padding: '0' }}>
                    <FontAwesomeIcon icon={["fas", "chart-line"]} /> &nbsp; Stocks
                </h2>
                <br/>
                <div className="asset-description">
                    <p>
                        Digital or paper certificates that represent shares of ownership in a publicly traded company.
                    </p>
                </div>
            </Title>
            <List
                className="list-scroll"
                ref={scrollRef}
            >
                {stocks.map((stock) => (
                    <ListCard key={stock.quote.symbol} stock={stock} onClick={showStockChart}>
                        <Logo src={`https://storage.googleapis.com/iex/api/logos/${stock.quote.symbol}.png`} />
                        <b>
                            <h2 className="cardTicker">{stock.quote.symbol.toLowerCase()}</h2>
                        </b>
                        <p style={{ height: '75px'}} className="stock-name">
                            {stock.quote.companyName.toLowerCase().split(' ', 2)[0] + ' ' + stock.quote.companyName.toLowerCase().split(' ', 2)[1]}
                        </p>
                        <h2>${stock.quote.latestPrice}</h2>
                        <br/>
                    </ListCard>
                ))}
            </List>
        </>
    );
};

export default StockList;