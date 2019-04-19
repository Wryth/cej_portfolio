import React from 'react';
import './instagramDisplay.css';

class InstagramDisplay extends React.Component{
    render(){
        return(
        <div id="igContainer">
            <img id="igSource" src="https://www.instagram.com/p/Bu1ovYuHamN/media/?size=l"/>
        </div>
        );
    }
}

export default InstagramDisplay;