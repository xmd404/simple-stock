import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const ForexChartWidget = () => (
    <div style={{ height: '300px', width: '90%', margin: '0 auto' }}>
        <TradingViewWidget
            symbol={`EUR${window.location.href.split("/")[6]}`}
            theme={Themes.DARK}
            locale="us"
            autosize
        />
    </div>
);

export default ForexChartWidget;