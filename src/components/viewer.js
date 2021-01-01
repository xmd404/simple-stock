import React, { useState } from 'react';
import { ViewerPlayer, ViewerWindow } from './components';
import Iframe from '@trendmicro/react-iframe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Viewer = () => {
    const [toggle, setToggle] = useState('Hide Playlist')
    const toggleViewer = () => {
        let toggle;
        var x = document.getElementById("player");
        if (x.style.display === "none") {
          x.style.display = "inline-block";
          setToggle("Hide Playlist");
        } else {
          x.style.display = "none";
          setToggle("Show Playlist");
        };
        return toggle;
    };

    return (
        <ViewerWindow >
            <br/>
            <a onClick={toggleViewer} style={{ cursor: `pointer`, border: `none` }}><FontAwesomeIcon icon={["fab", "youtube"]} /> &nbsp; {toggle}</a>
            <br/>
            <div id="player">
                <br/>
                <ViewerPlayer src="https://www.youtube.com/embed/_PXFVNWINQc" />
                <br/>
            </div>
            <br/>
        </ViewerWindow>
        
    );
};

export default Viewer;