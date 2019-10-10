import React from 'react';
import ReactDOM from 'react-dom';
import Scrollbar from 'react-scrollbars-custom'
import { BrowserRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';
import App from './App'

ReactDOM.render(<BrowserRouter><Scrollbar style={{ width: '100%', height: '100%' }}><App /></Scrollbar></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();