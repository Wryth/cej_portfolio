import React from 'react';
import ReactDOM from 'react-dom';
//import classes from '*.module.scss';
import * as serviceWorker from './serviceWorker';

import './index.css';
import Main from './components/main.js';
import App from "./components/App";

//===========================
ReactDOM.render(
    <App />,
    document.getElementById('root'));
serviceWorker.unregister();
