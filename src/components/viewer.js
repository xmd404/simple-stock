import React from 'react';
import CryptoChartContainer from './charts/CryptoChartContainer';
import { ViewerWindow } from './components';
import Iframe from '@trendmicro/react-iframe';

const Viewer = () => {

    return (
        <ViewerWindow>
            <Iframe 
                src="https://www.cnbc.com/video/2020/12/31/three-stocks-to-watch-in-2021-according-to-blue-lines-bill-baruch.html?__source=flipboard"
                width="100%"
                height={400}
                allowFullScreen="true" />
        </ViewerWindow>
        
    );
};

export default Viewer;