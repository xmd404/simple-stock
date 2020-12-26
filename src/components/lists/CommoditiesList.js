import React, { useRef } from 'react';
import { List, Title, ListCard } from '../components';

const CommoditiesList = ({ commodities }) => {
    // set state
    const scrollRef = useRef("myscroll");
	// render to page
    return (
        <div>
            <Title>
                <h2 style={{ margin: '0', padding: '0' }}>
                    Commodities
                </h2>
            </Title>
            <List
                className="list-scroll"
                ref={scrollRef}
            >
                {commodities.slice(0, 20).map((commodity) => (
                    <ListCard key={commodity} commodity={commodity}>
                        <br/>
                        <h2>
                            <span className="cardTicker">
                                {`${commodity.fields.commodity.toLowerCase().split(' ', 2)[0]}`}
                            </span>
                        </h2>
                        <p style={{ height: '75px'}}>{commodity.fields.commodity.toLowerCase()}</p>
                        <h3>
                            <b>$</b> {commodity.fields.price_index.toFixed(2)}
                        </h3>
                    </ListCard>
                ))}
            </List>
        </div>
    );
};

export default CommoditiesList;