import React from 'react';
//import ReactDOM from 'react-dom';
import "./customCursor.css";



class CustomCursor extends React.Component {


    handleCursor(event) {
        console.log("its a live!!!");
        document.getElementById("custom-cursor")
            .setAttribute("style", "top: "+(event.pageY - 10)+"px; left: "
                +(event.pageX - 10)+"px;")
    };

    render() {
        return(
            <div className="cursorContainer" onMouseMove={this.handleCursor}>
                <div id="custom-cursor" />
            </div>
        )
    }
}


export default CustomCursor;