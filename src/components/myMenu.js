import React from 'react';
import './myMenu.css';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            isShowing: false, //check whether drop down manu is triggered.
        };
        //this.triggerMenu = this.triggerMenu.bind(this);
      }
    
      //Change dropdown manu status.
      triggerMenu = () => {
        this.setState(prevState => ({
            isShowing: ! prevState.isShowing
          }));
      }

    //Change dropdown manu status.
    triggBio = () => {
        this.setState(prevState => ({
            isShowing: ! prevState.isShowing
        }));  

    }

    render(){
        return(
            <div id="menuContainer">
                <div className="menuOptions">
                        <button className="menuOption"
                        onClick={this.triggerMenu}
                        >Archive</button>

                        <button className="menuOption"
                        onClick={this.triggerMenu}
                        >Installation view</button>

                        <button className="menuOption"
                        onClick={this.triggerMenu}
                        >Exhibition</button>

                        <button className="menuOption"
                        onClick={this.triggerMenu}
                        >Bio</button>

                        <button className="menuOption"
                        onClick={this.triggerMenu}
                        >Downloads</button>

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


function Bio() {
    return(
        <p id="bioText">Since Danish sculptor Carl Emil Jacobsen (b. 1987) graduated from Kolding School of Design in 2012, his practice has oscilated between art and design, revolving around existentialism, ritualistic sophistication and solid crafts manship. Working with found materials such as bricks from demolished buildings, he brings new life to powdered stone, conver ting it into layers of natural colored pigment. His nonfigurative sculptures stand on their own terms, fostering experiential connection over intellectual interference. Jacobsen’s works has been exhibited at The Curio - Chart Art Fair and The Spring Exhibition at Kunsthal Charlottenborg in Copenhagen, with Galerie Maria Wettergren, at Piscine in Aarhus and elsewhere.
        </p>
    )
}

export default Menu;