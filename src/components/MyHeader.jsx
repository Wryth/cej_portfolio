import React from 'react';
import './MyHeader.css';
import Menu from './MyMenu';

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
        <div className="contactText">
        <pre className="smallText">
            <a className="emailLink contactTextLines" href="mailto:carlemiljacobsen@gmail.com">
                    E-mail    carlemiljacobsen&thinsp;(at)&thinsp;gmail.com
            </a>
        </pre>
            <pre className="contactTextLines smallText">Phone    +45 31701698</pre>
        </div>
    )
}

export default MyHeader;
