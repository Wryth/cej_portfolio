import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from "./components/App";
// import {make} from "./components/Test.bs";
// import {make} from "./components/Downloads.bs"

//===========================
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);

serviceWorker.unregister();
