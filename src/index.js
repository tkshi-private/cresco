import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mercari from './Mercari';
import BeginnerRegister1 from './BeginnerRegister1';
import BeginnerRegister2 from './BeginnerRegister2';
import BeginnerRegister3 from './BeginnerRegister3';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/mercari" component={Mercari} />
        <Route path="/beginner_register1" component={BeginnerRegister1} />
        <Route path="/beginner_register2" component={BeginnerRegister2} />
        <Route path="/beginner_register3" component={BeginnerRegister3} />
    </Router>, document.getElementById('root'));
registerServiceWorker();
