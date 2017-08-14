import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mercari from './Mercari';
import BeginnerRegister1 from './BeginnerRegister1';
import BeginnerRegister2 from './BeginnerRegister2';
import BeginnerRegister3 from './BeginnerRegister3';
import GoldRegister3 from './GoldRegister3';
import GoldRegister4 from './GoldRegister4';
import Register6 from './Register6';
import Register9 from './Register9';
import Register11 from './Register11';
import Register12 from './Register12';
import Register14 from './Register14';
import Register16 from './Register16';
import Register17 from './Register17'; 
import flow2 from './flow2';
import flow3 from './flow3';
import flow4 from './flow4';
import study from './study';
import User from './User';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/mercari" component={Mercari} />
        <Route path="/beginner_register1" component={BeginnerRegister1} />
        <Route path="/beginner_register2" component={BeginnerRegister2} />
        <Route path="/flow2" component={flow2} />
        <Route path="/flow3" component={flow3} />
        <Route path="/flow4" component={flow4} />
        <Route path="/study" component={study} />
        <Route path="/beginner_register3" component={BeginnerRegister3} />
        <Route path="/gold_register3" component={GoldRegister3} />
        <Route path="/gold_register4" component={GoldRegister4} />
        <Route path="/register6" component={Register6} />
        <Route path="/register12" component={Register12} />
        <Route path="/register11" component={Register11} />
        <Route path="/register14" component={Register14} />
        <Route path="/register17" component={Register17} />
        <Route path="/register16" component={Register16} />
        <Route path="/register9" component={Register9} />
        <Route path="/user/:uid" component={User} />
    </Router>, document.getElementById('root'));
registerServiceWorker();
