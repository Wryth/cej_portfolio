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
        <div className="contactText">
            <a className="contactTextLines" href="mailto:carlemiljacobsen@gmail.com">
                <pre className="emailLink">
                    E-mail    carlemiljacobsen&thinsp;(a)&thinsp;gmail.com
                </pre>
            </a>
            <pre className="contactTextLines">Phone    +45 31701698</pre>
        </div>
    )
}

export default MyHeader;