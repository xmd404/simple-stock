import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const ChartWidget = () => (
    <div style={{ height: '300px', width: '95%', margin: '0 auto' }}>
        <TradingViewWidget
            symbol={`NASDAQ:${window.location.href.split("/")[6]}`}
            theme={Themes.DARK}
            locale="us"
            autosize
        />
    </div>
);

export default ChartWidget;