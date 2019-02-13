import React from 'react';
import './myHeader.css';

class MyHeader extends React.Component {
    constructor(props:number) {
        super(props);
      }
    

        private mouseOver = ():void => {
            //this.style.color = "red";
            console.log("Its Here!:", this);


        }
        
        private mouseOut = ():void => {
            console.log("It left!")
            //document.getElementById("name").style.color = "black";
        }


    render(){
        return(
            <div className="MyHeaderContainer">
                        <h1 id="name"
                        onMouseOver={this.mouseOver} 
                        onMouseOut ={this.mouseOut}
                        >CARL EMIL JACOBSEN
                        </h1>
                        <div className="headerMenu">
                            <p className="headerOptions">X</p>
                            <p className="headerOptions">Instagram</p>
                            <p className="headerOptions">Downloads</p>
                            <p className="headerOptions">Exhibition</p>
                            <p className="headerOptions">Bio.</p>
                            <p className="headerOptions">Contact</p>
                        </div>
            </div>
        );
    }

}


export default MyHeader;