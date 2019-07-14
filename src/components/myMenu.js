import React from 'react';
import {
    NavLink,
  } from "react-router-dom";

import './myMenu.css';

class Menu extends React.Component {
    render(){
        return(
            <div id="menuContainer">
                <div className="menuOptions">
                        <NavLink exact id="name" 
                            className="menuOption"
                            to="/"
                            >CARL EMIL JACOBSEN
                        </NavLink>

                        <NavLink className="menuOption"
                        activeClassName="active"
                        id="menuArchive"
                        to="/archive"
                        >Selected works
                        </NavLink>

                        <NavLink className="menuOption"
                        activeClassName="active"
                        id="menuBio"
                        to="/bio"
                        >CV</NavLink>
                        
                        <NavLink className="menuOption"
                        activeClassName="active"
                        id="menuDownloads"
                        to="/downloads"
                        >Download</NavLink>

                        <a id="igLink" className="menuOption" target="_blank" href="https://www.instagram.com/carlemiljacobsen/">Instagram</a>
                </div>
            </div>
        );
    }
}

export default Menu;