import React from 'react';
import './myMenu.css';
import { func } from 'prop-types';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            isShowing: false, //check whether drop down manu is triggered.
        };
        this.triggerMenu = this.triggerMenu.bind(this);
      }
    
      //Change dropdown manu status.
      triggerMenu = () => {
        this.setState(prevState => ({
            isShowing: ! prevState.isShowing
          }));
      }

      

    render(){
        return(
            <div id="menuContainer">
                <div className="menuOptions">
                        <button id="xMenu"
                        className="menuOption"
                        onClick={this.triggerMenu}
                        >X</button>
                        <button className="menuOption">Instagram</button>
                        <button className="menuOption">Downloads</button>
                        <button className="menuOption">Exhibition</button>
                        <button className="menuOption"
                        onClick={this.triggerMenu}
                        >Bio.</button>
                        <button className="menuOption">Contact</button>
                </div>
                <div id="menuBox"
                style={{visibility: this.state.isShowing ? "visible" : "hidden"}}
                >
                    {setContent()}
                </div>
            </div>
        );
    }

}

class BoxContent extends React.Component {
    render(){
        return(
            <div id="contentContainer">
                Hello?
            </div>
        );
    }
}

function setContent() {
    return(
        contact()
    )
}

function contact(params) {
    return(
        <p id="contactText">
            E-mail carlemiljacobsen <br></br> (a) gmail.com Phone +45 3170169
        </p>
    )
    
}

function bio() {
    return(
        <p id="bioText">Since Danish sculptor Carl Emil Jacobsen (b. 1987) graduated from Kolding School of Design in 2012, his practice has oscilated between art and design, revolving around existentialism, ritualistic sophistication and solid crafts manship. Working with found materials such as bricks from demolished buildings, he brings new life to powdered stone, conver ting it into layers of natural colored pigment. His nonfigurative sculptures stand on their own terms, fostering experiential connection over intellectual interference. Jacobsen’s works has been exhibited at The Curio - Chart Art Fair and The Spring Exhibition at Kunsthal Charlottenborg in Copenhagen, with Galerie Maria Wettergren, at Piscine in Aarhus and elsewhere.
        </p>
    )
}


export default Menu;