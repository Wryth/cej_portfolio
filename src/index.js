import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorker from './serviceWorker';

import './index.css';
import  { App }  from "./components/App.bs";

//===========================
const container = document.getElementById('root');
const root = createRoot(container); 
// eslint-disable-next-line react/jsx-pascal-case
root.render(<App.make />);

serviceWorker.unregister();
