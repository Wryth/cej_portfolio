import React from 'react';
import './myHeader.css';
import Menu from './myMenu';

class MyHeader extends React.Component {
    render(){
        return(
            <div className="MyHeaderContainer">
                <div id="headerMenu">
                    <Menu />
                </div>
                <Contact />
            </div>
        );
    }
}

function Contact() {
    return(
        <div id="contactText">
            <pre>E-mail      carlemil(a)jacobsen.com</pre>
            <pre>Phone      +45 31701698</pre>
        </div>
    )
}

export default MyHeader;