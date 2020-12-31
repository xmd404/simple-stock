import React, { useRef } from 'react';
import { List, Title, ListCard } from '../components';
import { forex } from '../../utility';

const ForexList = ({ pairs }) => {
    //
    const scrollRef = useRef("myscroll");
    // render to page
    return (
        <div>
            <Title>
            <h2 style={{ margin: '0', padding: '0' }}>
                Forex
            </h2>
            </Title>
            <List
                className="list-scroll"
                ref={scrollRef}
            >
                {pairs.slice(0, 20).map((pair) => (
                    <ListCard key={pair}>
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
                        <p style={{ height: '75px'}}>{forex[pair[0]].toLowerCase()}</p>
                        <h2>
                            <b>€</b> {pair[1].toFixed(2)}
                        </h2>
                    </ListCard>
                ))}
            </List>
        </div>
    );
};

export default ForexList