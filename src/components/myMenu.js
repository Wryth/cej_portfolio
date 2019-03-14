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
                        {/*<NavLink className="menuOption"
                        to="/"
                        >Home</NavLink>*/}

                        <NavLink className="menuOption"
                        id="menuArchive"
                        to="/archive"
                        >Archive</NavLink>

                        {/*<NavLink className="menuOption"
                        >Installation view</NavLink>*/}

                        <NavLink className="menuOption"
                        id="menuExhibitions"
                        to="/exhibitions"
                        >Exhibitions</NavLink>

                        <NavLink className="menuOption"
                        id="menuBio"
                        to="/bio"
                        >Bio</NavLink>
                        
                        <NavLink className="menuOption"
                        id="menuDownloads"
                        to="/downloads"
                        >Downloads</NavLink>

                        <a id="igLink" href="https://www.instagram.com/carlemiljacobsen/">Instagram</a>
                </div>
            </div>
        );
    }
}

export default Menu;