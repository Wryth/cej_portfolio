import React from 'react';
import CustomCursor from './CustumCursor';
import {make as Main} from "./main/Main.bs";
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
