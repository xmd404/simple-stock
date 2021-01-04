import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const StockChartWidget = ({ company }) => (
    <div style={{ height: '300px', width: '94%', margin: '0 auto' }}>
        <TradingViewWidget
            symbol={`${company.Exchange}:${window.location.href.split("/")[6]}`}
            theme={Themes.DARK}
            locale="us"
            autosize
        />
    </div>
);

export default StockChartWidget;