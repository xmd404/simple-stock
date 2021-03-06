import React, { useState } from 'react';
import { ViewerBrowser, ViewerPlayer, ViewerWindow } from './components';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import Iframe from '@trendmicro/react-iframe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Viewer = () => {
    // setState
    const [toggle, setToggle] = useState('Items selected from "News" section will open here.')
    const toggleViewer = () => {
        const x = document.getElementById("player");
        if (x.style.display == 'none') {
          x.style.display = "inline-block";
          setToggle("Click here to minimize player");
        } else {
          x.style.display = "none";
          setToggle('Items selected from "News" section will open here.');
        };
    };
    // render to page
    return (
        <ViewerWindow>
            <div 
                onClick={toggleViewer}
                id="toggle-bar"
            >
                <p id="toggle">
                    {toggle}
                </p>
            </div>
            <div id="player">
                <ViewerPlayer id="viewer" src={`https://www.youtube.com/embed/Y7OAVZto0CQ?&rel=0&controls=0&showinfo=0&playsinline=1`} />
                <br/>
            </div>
            <div id="browser">
                <TradingViewEmbed
                    widgetType={widgetType.STOCK_MARKET}
                    widgetConfig={{
                    colorTheme: "dark",
                    isTransparent: "true",
                    width: "100%",
                    height: "103%",
                    }}
                />
            </div>
        </ViewerWindow>
        
    );
};

export default Viewer;