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
//import Archive from './archive.js';
import Downloads from './downloads';
import CustomCursor from './custumCursor';
import Main from "./main";
import "./App.css";

class App extends React.Component {

    handleCursor(event) {
        console.log("its a live!!!");
        document.getElementById("custom-cursor")
            .setAttribute("style", "top: "+(event.pageY - 0)+"px; left: "
                +(event.pageX - 0)+"px;")
    };
    
    render() {
        return(
            <div className="appContainer" onMouseMove={this.handleCursor}>
                <CustomCursor />
                <Main />
            </div>
        );
    }
}

export default App;