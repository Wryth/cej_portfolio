import React from 'react';
import './myHeader.css';
import Menu from './myMenu';


class MyHeader extends React.Component {
    render(){
        return(
            <div className="MyHeaderContainer">
                <h1 id="name"
                >CARL EMIL JACOBSEN
                </h1>
                <div id="headerMenu">
                    <Menu />
                </div>
            </div>
        );
    }
}

export default MyHeader;