import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import {login,logout,onLogin,onLogout} from './firebase'

window.logout = ()=>{
  logout()
}



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:{}
    }
  }
  componentDidMount(){
    onLogin((user)=>{
      console.log('logined',user)
      this.setState({user:user})
    })
    onLogout(()=>{
      console.log('logouted')
      this.setState({user:{}})
    })
  }
    render() {
        return (
            <div className="App">
                <h1>n-license</h1>
                <img src={this.state.user.photoURL}></img>
                <h5>{this.state.user.displayName}</h5>
                <button onClick={login}>Facebookログイン</button>
                <button onClick={logout}>ログアウト</button>
            </div>
        );
    }
}

export default App;
