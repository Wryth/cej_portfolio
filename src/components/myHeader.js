import React from 'react';
import './myHeader.css';

class MyHeader extends React.Component {
    constructor() {
        super();
        this.state = {
        };
      }
    
    render(){
        return(
            <div className="MyHeaderContainer">
                        <h1 id="name"
                        >CARL EMIL JACOBSEN
                        </h1>
                        <div className="headerMenu">
                            <button className="headerOptions">X</button>
                            <button className="headerOptions">Instagram</button>
                            <button className="headerOptions">Downloads</button>
                            <button className="headerOptions">Exhibition</button>
                            <button className="headerOptions">Bio.</button>
                            <button className="headerOptions">Contact</button>
                        </div>
            </div>
        );
    }

}


export default MyHeader;