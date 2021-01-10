import React, { useRef } from 'react';
import { showCryptoChart } from '../../utility';
import { List, Title, ListCard, Logo } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const CryptoList = ({ cryptos }) => {
    // set state
    const scrollRef = useRef("myscroll");
    // render to page
    return (
        <div>
            <Title>
                <h2 style={{ margin: '0', padding: '0' }}>
                    <FontAwesomeIcon icon={["fas", "coins"]} /> &nbsp; Crypto
                </h2>
                <br/>
                <div className="asset-description">
                    <p>
                        Digital currency uncontrolled by banks or government.
                    </p>
                </div>
            </Title>
            <List
                className="list-scroll"
                ref={scrollRef}
            >
                {cryptos.slice(0, 20).map((crypto) => (
                    <ListCard key={crypto.symbol} crypto={crypto} onClick={showCryptoChart}>
                        <Logo src={crypto.image}/>
                        <b>
                            <h2 className="cardSymbol">{crypto.symbol}</h2>
                        </b>
                        <p className="cardTicker" style={{ height: '75px'}}>{crypto.id}</p>
                        <h2>${crypto.current_price.toFixed(2)}</h2>
                        <br/>
                    </ListCard>
                ))}
            </List>
        </div>
    );
};

export default CryptoList;