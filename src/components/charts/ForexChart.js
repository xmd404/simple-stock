import React from 'react';
import { ChartCard } from '../components';
import { forex } from '../../utility';

const ForexChart = ({ pairs }) =>
    pairs.map((pair) => (
        <ChartCard key={pair}>
            <div style={{ float: 'left', width: '50%' }}>
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
            </div>
            <div style={{ float: 'right', width: '50%', textAlign: 'right' }}>
                <h2>
                    <b>€</b> {pair[1].toFixed(2)}
                </h2>
                <br/>
            </div>
        </ChartCard>
    ));

export default ForexChart