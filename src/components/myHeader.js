import React from 'react';
import './myHeader.css';
import Menu from './myMenu';


class MyHeader extends React.Component {
    render(){
        return(
            <div className="MyHeaderContainer">
                <div id="shortIntro">
                    <h1 id="name"
                    >CARL EMIL JACOBSEN
                    </h1>
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
            E-mail  carlemiljacobsen(a)gmail.com <br></br> Phone +45 31701698
        </p>
    )
}

export default MyHeader;