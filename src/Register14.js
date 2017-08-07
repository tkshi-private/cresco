import React, {Component} from 'react';
import {login, getCurrentUser,register} from './firebase'
import ToggleDisplay from 'react-toggle-display';
import {observer} from "mobx-react";
import {observable} from "mobx";
import users from './store/user';
import {Link} from 'react-router'

@observer
export default class App extends Component {
    render() {
      register(users.getMyUser())
        return (
            <div>
              	<title>N-LICENCE</title>
              	<link href="css/reset.css" rel="stylesheet" type="text/css" />
              	<link href="css/style.css" rel="stylesheet" type="text/css" />
              	<link href="css/sp.css" rel="stylesheet" type="text/css" />
              	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
              <div id="wrapper">

              	<div className="cardCover white-cover">
              		<div className="cardCover__flow-imgBlock09">
              			<p><img src="img/common/icon_comp.png" alt=""/></p>
              		</div>

              		<div className="tel_lead">
              			<p>登録が完了しました！</p>
              		</div>

              		<div className="btnAction">
              			<Link to={`/user/${users.getMyUser().uid}`}>さっそくライセンスを見る</Link>
              		</div>

              	</div>

              	<div className="pager">
              		<span className="carrent"></span>
              		<span className=""></span>
              		<span className=""></span>
              		<span className=""></span>
              	</div>

              	<div className="stepText__box">
              		<p>おつかれさまでした！</p>
              	</div>

              </div>
              	<script src="js/jquery-2.1.4.min.js"></script>
            </div>
        )
    }
}
