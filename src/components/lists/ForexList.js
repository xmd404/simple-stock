import React, { useRef } from 'react';
import { List, Title, ListCard } from '../components';
import { forex, showForexChart } from '../../utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const ForexList = ({ pairs }) => {
    //
    const scrollRef = useRef("myscroll");
    // render to page
    return (
        <div>
            <Title>
                <h2 style={{ margin: '0', padding: '0' }}>
                    <FontAwesomeIcon icon={["fas", "exchange-alt"]} /> &nbsp; Forex
                </h2>
                <br/>
                <div className="asset-description">
                    <p>
                        Short for <b>for</b>eign <b>ex</b>change, where the buying & selling of foreign currency occurs.
                    </p>
                </div>
            </Title>
            <List
                className="list-scroll"
                ref={scrollRef}
            >
                {pairs.slice(0, 20).map((pair) => (
                    <ListCard key={pair} onClick={showForexChart}>
                        <br/>
                        {/* <img src={"https://www.countryflags.io/eu/flat/32.png"}/> */}
                        <h2>
                            <span role="img" aria-label="euro">💶</span>
                        </h2>
                        <br/>
                        <h2>
                            euro 
                            <br/>
                            → <span className="cardTicker">{pair[0].toLowerCase()}</span>
                        </h2>
                        <p className="currency-name" style={{ height: '75px'}}>{forex[pair[0]].toLowerCase()}</p>
                        <h2>
                            <b>€</b> {pair[1].toFixed(2)}
                        </h2>
                        <br/>
                    </ListCard>
                ))}
            </List>
        </div>
    );
};

export default ForexList