import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {login,logout,onLogin,onLogout} from './firebase'
import {Link} from 'react-router'

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
      this.setState({user:user})
    })
    onLogout(()=>{
      this.setState({user:{}})
    })
  }
    render() {
        return (
            <div className="App">
                	<title>n-license</title>
                	<link href="css/reset.css" rel="stylesheet" type="text/css" />
                	<link href="css/style.css" rel="stylesheet" type="text/css" />
                	<link href="css/sp.css" rel="stylesheet" type="text/css" />
                	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div id="wrapper">
                	<div className="cardCover view_outer">
                		<div className="cardCover__view-leadBlock">
                			<p className="lead-title">index</p>
                		</div>
                		<div className="cardCover__view-LinkBlock">
                			<ul className="view_Link_list">
                				<li><Link to="/mercari">ビギビナーの画面へ</Link></li>
                				<li><Link to="/mercari">ゴールドライセンスの画面へ</Link></li>
                				<li><Link to="/register6">登録フローへ</Link></li>
                			</ul>
                		</div>
                	</div>
                </div>
                	<script src="js/jquery-2.1.4.min.js"></script>
                	<script src="js/app.js"></script>

            </div>
        );
    }
}

export default App;
