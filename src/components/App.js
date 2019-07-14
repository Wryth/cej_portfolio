import React from 'react';

import CustomCursor from './custumCursor';
import Main from "./main";
import "./App.css";

class App extends React.Component {

    handleCursor(event) {
        document.getElementById("custom-cursor")
            .setAttribute("style", "top: "+(event.pageY - 0)+"px; left: "
                +(event.pageX - 0)+"px;")
    };
    
    render() {
        return(
            <div className="appContainer" onMouseMove={this.handleCursor}>
                <CustomCursor />
                <Main />
            </div>
        );
    }
}

export default App;