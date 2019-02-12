import React from 'react';
import './myHeader.css';


class MyHeader extends React.Component {
    render(){
        return(
            <div className="MyHeader">
                <header className="mhead">
                    <div>
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
                </header>
            </div>
        );
    }

}


export default MyHeader;