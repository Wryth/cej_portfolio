import React from 'react';
import ReactDOM from 'react-dom';
//import classes from '*.module.scss';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './components/exampleReact/App';
import MyHeader from './components/myHeader.tsx';
import WorkList from './components/workList.tsx';

class Main extends React.Component {
    render() {
        return(
            <div className="mainContainer">
                <MyHeader />
                <WorkList />
            </div>
        );
    }

}






//===========================
ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
