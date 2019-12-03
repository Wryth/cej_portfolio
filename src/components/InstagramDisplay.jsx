import React from 'react';
import './InstagramDisplay.css';

function InstagramDisplay(props) {
        return(
        <div id="igContainer">
            <img id="igSource" src={props.igImg} alt="lastIgPost"/>
        </div>
        );
}
export default InstagramDisplay;
