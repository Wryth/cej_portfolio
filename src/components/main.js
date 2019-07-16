import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
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
                    <Route path="/bio" component={Bio}/>
                    <Route path="/downloads" component={Downloads}/>
                </div>
                <Route exact path="/" component={InstagramDisplay}/>
                <Route path="/archive" component={SimpleSlider}/>
            </div>
            </HashRouter>
        );
    }
}

export default Main;