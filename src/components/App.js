import React from 'react';
import { CustomCursor} from './cursor/CustumCursor.bs';
import { Main } from "./main/Main.bs";
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
                <CustomCursor.make />
                <Main.make />
            </div>
        );
    }
}

export default App;
