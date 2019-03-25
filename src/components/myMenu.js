import React from 'react';
import {
    NavLink,
  } from "react-router-dom";

import './myMenu.css';


class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
          isFont: false,
        }
        this.toggleIsShowing = this.toggleIsShowing.bind(this);
      }

      toggleIsShowing() {
        this.setState(prevState => ({
            isFont: ! prevState.isFont
        }));
      }
        
    render(){
        return(
            <div id="menuContainer">
                <div className="menuOptions">
                        <NavLink className="menuOption"
                        /*onClick={this.toggleIsShowing}
                        style={{"font-family": this.state.isFont ? "georgia" : "arial"}}*/
                        id="menuArchive"
                        to="/archive"
                        >Selected works</NavLink>

                        <NavLink className="menuOption"
                        /*onClick={this.toggleIsShowing}
                        style={{"font-family": this.state.isFont ? "georgia" : "arial"}}*/
                        id="menuBio"
                        to="/bio"
                        >CV</NavLink>
                        
                        <NavLink className="menuOption"
                        /*onClick={this.toggleIsShowing}
                        style={{"font-family": this.state.isFont ? "georgia" : "arial"}}*/
                        id="menuDownloads"
                        to="/downloads"
                        >Download(.pdf)</NavLink>

                        <a id="igLink" href="https://www.instagram.com/carlemiljacobsen/">Instagram</a>
                </div>
            </div>
        );
    }
}

export default Menu;