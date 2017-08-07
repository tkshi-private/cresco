import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mercari from './Mercari';
import BeginnerRegister1 from './BeginnerRegister1';
import BeginnerRegister2 from './BeginnerRegister2';
import BeginnerRegister3 from './BeginnerRegister3';
import Register6 from './Register6';
import Register9 from './Register9';
import Register11 from './Register11';
import Register12 from './Register12';
import Register14 from './Register14';
import User from './User';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/mercari" component={Mercari} />
        <Route path="/beginner_register1" component={BeginnerRegister1} />
        <Route path="/beginner_register2" component={BeginnerRegister2} />
        <Route path="/beginner_register3" component={BeginnerRegister3} />
        <Route path="/register6" component={Register6} />
        <Route path="/register12" component={Register12} />
        <Route path="/register11" component={Register11} />
        <Route path="/register14" component={Register14} />
        <Route path="/register9" component={Register9} />
        <Route path="/user/1" component={User} />
    </Router>, document.getElementById('root'));
registerServiceWorker();
