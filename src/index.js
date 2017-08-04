import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(    <Router history={browserHistory}>
        <Route path="/" component={App} />
    </Router>, document.getElementById('root'));
registerServiceWorker();
