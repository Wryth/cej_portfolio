import React from 'react';
import ReactDOM from "react-dom";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import './myMenu.css';


class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            isShowing: false, //check whether drop down manu is triggered.
        };
        //this.triggerMenu = this.triggerMenu.bind(this);
      }
    
    render(){
        return(
            <div id="menuContainer">
                <div className="menuOptions">
                        <NavLink className="menuOption"
                        to="/"
                        >Home</NavLink>

                        <NavLink className="menuOption"
                        to="/archive"
                        >Archive</NavLink>

                        {/*<NavLink className="menuOption"
                        >Installation view</NavLink>*/}

                        <NavLink className="menuOption"
                        to="/exhibitions"
                        >Exhibitions</NavLink>

                        <NavLink className="menuOption"
                        to="/bio"
                        >Bio</NavLink>
                        
                        <NavLink className="menuOption"
                        to="/downloads"
                        >Downloads</NavLink>

                        <a id="igLink" href="https://www.instagram.com/carlemiljacobsen/">Instagram</a>
                </div>
                
                {/*<div id="menuBox"
                ref={this.menuBox}
                style={{visibility: this.state.isShowing ? "visible" : "hidden"}}
                >
                <Bio />
                <Contact />
                </div>*/}
            </div>
        );
    }
}

export default Menu;