import React from 'react';
import './myHeader.css';
import Menu from './myMenu';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";


class MyHeader extends React.Component {
    render(){
        return(
            <div className="MyHeaderContainer">
                <div id="shortIntro">
                    <NavLink id="name" 
                        className="menuOption"
                        to="/"
                        >CARL EMIL JACOBSEN</NavLink>
                    <Contact />
                </div>
                <div id="headerMenu">
                    <Menu />
                </div>
            </div>
        );
    }
}

function Contact() {
    return(
        <p id="contactText">
            E-mail carlemil (a) jacobsen.com<br></br> Phone +45 31701698
        </p>
    )
}

export default MyHeader;