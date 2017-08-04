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
                <html lang="ja">
                <head>
                	<meta charset="utf-8" />
                	<meta name="keywords" content=",,," />
                	<meta name="description" content="" />
                	<meta name="viewport" content="width=device-width" />
                	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
                	<title>n-license</title>
                	<link href="css/reset.css" rel="stylesheet" type="text/css" />
                	<link href="css/style.css" rel="stylesheet" type="text/css" />
                	<link href="css/sp.css" rel="stylesheet" type="text/css" />
                	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                </head>
                <body>
                <div id="wrapper">

                	<div className="cardCover view_outer">
                		<div className="cardCover__view-leadBlock">
                			<p className="lead-title">index</p>
                		</div>

                		<div className="cardCover__view-LinkBlock">
                			<ul className="view_Link_list">
                				<li><a href="/mercari">ビギビナーの画面へ</a></li>
                				<li><a href="#">ゴールドライセンスの画面へ</a></li>
                				<li><a href="#">登録フローへ</a></li>
                			</ul>
                		</div>

                	</div>

                </div>

                	<script src="js/jquery-2.1.4.min.js"></script>
                	<script src="js/app.js"></script>
                </body>
                </html>

            </div>
        );
    }
}

export default App;
