import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mercari from './Mercari';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/mercari" component={Mercari} />
    </Router>, document.getElementById('root'));
registerServiceWorker();
