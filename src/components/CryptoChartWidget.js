import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const CryptoChartWidget = () => (
    <div style={{ height: '300px', width: '90%', margin: '0 auto' }}>
        <TradingViewWidget
            symbol={`${window.location.href.split("/")[7]}USD`}
            theme={Themes.DARK}
            locale="us"
            autosize
        />
    </div>
);

export default CryptoChartWidget;