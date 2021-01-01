import React, { useState } from 'react';
import { ViewerPlayer, ViewerWindow } from './components';
import Iframe from '@trendmicro/react-iframe';

const Viewer = () => {
    const [toggle, setToggle] = useState('[-]  Hide Player')
    const toggleViewer = () => {
        let toggle;
        var x = document.getElementById("player");
        if (x.style.display === "none") {
          x.style.display = "inline-block";
          setToggle("[-]  Hide Player");
        } else {
          x.style.display = "none";
          setToggle("[+]  Show Player");
        };
        return toggle;
    };

    return (
        <ViewerWindow >
            <br/>
            <a href={`#`} onClick={toggleViewer}>{toggle}</a>
            <br/>
            <div id="player">
                <br/>
                <ViewerPlayer src="https://www.youtube.com/embed/_PXFVNWINQc" />
            </div>
            <br/>
        </ViewerWindow>
        
    );
};

export default Viewer;