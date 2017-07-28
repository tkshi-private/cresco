import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import {login,logout} from './firebase'

window.logout = ()=>{
  logout()
}

// login()

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>n-license</h1>
                <button onClick={login}>Facebookログイン</button>
                <button onClick={logout}>ログアウト</button>
            </div>
        );
    }
}

export default App;
