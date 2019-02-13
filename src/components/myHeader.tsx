import React from 'react';
import './myHeader.css';


class MyHeader extends React.Component {
    constructor(props:number) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(state => ({
          //isToggleOn: !state.isToggleOn
        }));
      }


    render(){
        return(
            <div className="MyHeaderContainer">
                        <h1 id="name">CARL EMIL JACOBSEN</h1>
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