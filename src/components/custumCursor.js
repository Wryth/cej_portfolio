import React from 'react';
//import ReactDOM from 'react-dom';
import "./customCursor.css";



class CustomCursor extends React.Component {

    render() {
        return(
            <div className="cursorContainer">
                <div id="custom-cursor" />
            </div>
        )
    }
}


export default CustomCursor;