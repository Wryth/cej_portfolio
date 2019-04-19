import React from 'react';
import ReactDOM from 'react-dom';
//import classes from '*.module.scss';
import * as serviceWorker from './serviceWorker';

import './index.css';
import Main from './components/main.js';
import InlineStylesTutorial from './components/exampleReact/InlineStylesTutorial';
import CustomCursor from "./components/custumCursor";

//===========================
ReactDOM.render(
    <Main />, 
    document.getElementById('root'));
serviceWorker.unregister();
