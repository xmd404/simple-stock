import React, { useEffect, useState } from 'react';
import { ChartCard, Logo } from '../components';
import TechnicalAnalysis from 'react-tradingview-technical-analysis';


let StockChart = ({ stocks }) => {
    // set state
    const [analysis, setAnalysis] = useState('analyzing...');
    // fetch analysis
    // useEffect(() => {
    //     setAnalysis(document.getElementsByClassName("speedometerSignal-pyzN--tL")[0].innerText);
    // });
    // render to page
    return ( 
        <div>
        {stocks.map((stock) => (
            <div>
                <ChartCard key={stock.quote.symbol}>
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
                        <br/>
                        <br/>
                        <span style={{ padding: '12px 24px', color: '#fff', backgroundColor: 'rgb(69, 119, 197', borderRadius: '5px', borderColor: 'none' }}>
                            Analyze
                        </span>
                    </div>
                </ChartCard>
            </div>
        ))}
        </div>
    );
};

export default StockChart;