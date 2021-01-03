import React, { useState } from 'react';
import { ViewerPlayer, ViewerWindow } from './components';
import Iframe from '@trendmicro/react-iframe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Viewer = () => 
    {// setState
    const [toggle, setToggle] = useState('Open Playlist')
    const toggleViewer = () => {
        var x = document.getElementById("player");
        if (x.style.display == "none") {
          x.style.display = "inline-block";
          setToggle("Hide Playlist");
        } else {
          x.style.display = "none";
          setToggle("Open Playlist");
        };
    };
    // render to page
    return (
        <ViewerWindow >
            <div 
                onClick={toggleViewer}
                style={{ 
                    backgroundColor: 'rgb(15, 17, 22)', 
                    cursor: `pointer`, 
                    padding: '10px 0 15px', 
                    borderTop: `2px solid rgb(13, 178, 120)` }}
            >
                <p>
                    {toggle}
                </p>
            </div>
            <div id="player">
                <br/>
                <ViewerPlayer src="https://www.youtube.com/embed/_PXFVNWINQc" />
                <br/><br/>
            </div>
        </ViewerWindow>
        
    );
};

export default Viewer;