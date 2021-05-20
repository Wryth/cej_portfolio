import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from "./components/App";
// import {make} from "./components/Test.bs";
// import {make} from "./components/Downloads.bs"

//===========================
ReactDOM.render(
    //make("https://google.com"),
    <App />,
    document.getElementById('root'));
serviceWorker.unregister();
