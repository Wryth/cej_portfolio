import React from 'react';
import {
    Route,
    HashRouter
  } from "react-router-dom";

import './main.css';
import MyHeader from './myHeader.js';
import Bio from './bio';
import InstagramDisplay from './instagramDisplay.js';
import Downloads from './downloads';
import SimpleSlider from "./exampleReact/SlickDemo";

class Main extends React.Component {

    render() {
        return(
            <HashRouter>
            <div className="mainContainer">
                <MyHeader />
                <div id="contentBox">
                    <Route path="/bio" component={ Bio }/>
                    <Route path="/downloads" component={ Downloads }/>
                    <Route path="/archive" component={ SimpleSlider }/>
                </div>
                <Route exact path="/" component={ InstagramDisplay }/>
            </div>
            </HashRouter>
        );
    }
}

export default Main;