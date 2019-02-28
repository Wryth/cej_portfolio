import React from 'react';
import ReactDOM from 'react-dom';
//import classes from '*.module.scss';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import './main.css';
import MyHeader from './myHeader.js';
import Bio from './bio';
import Exhibitions from './exhibitions';
import InstagramDisplay from './instagramDisplay.js';
import Archive from './archive.js';

class Main extends React.Component {
    render() {
        return(
            <HashRouter>
            <div className="mainContainer">
                <MyHeader />
                <div id="contentBox">
                    <Route exact path="/" component={InstagramDisplay}/>
                    <Route path="/archive" component={Archive}/>
                    <Route path="/exhibitions" component={Exhibitions}/>
                    <Route path="/bio" component={Bio}/>
                </div>
            </div>
            </HashRouter>
        );
    }

}

export default Main;