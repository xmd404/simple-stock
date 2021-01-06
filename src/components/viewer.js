import React, { useState } from 'react';
import { ViewerPlayer, ViewerWindow } from './components';
import Iframe from '@trendmicro/react-iframe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Viewer = () => {
    // setState
    const [toggle, setToggle] = useState('Items selected from "News" section will play here.')
    const toggleViewer = () => {
        const x = document.getElementById("player");
        if (x.style.display == 'none') {
          x.style.display = "inline-block";
          setToggle("Click here to minimize player");
        } else {
          x.style.display = "none";
          setToggle('Items selected from "News" section will play here.');
        };
    };
    // render to page
    return (
        <ViewerWindow >
            <div 
                onClick={toggleViewer}
                style={{ 
                    backgroundColor: 'rgb(14,17,22)', 
                    cursor: `pointer`, 
                    padding: '10px 0 15px', 
                    borderTop: `3px solid rgb(54, 118, 203)` }}
            >
                <p id="toggle">
                    {toggle}
                </p>
            </div>
            <div id="player">
                <br/>
                <ViewerPlayer id="viewer" src={""} />
                <br/>
                <br/>
            </div>
        </ViewerWindow>
        
    );
};

export default Viewer;