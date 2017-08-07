import React, {Component} from 'react';
import {login, getCurrentUser, register} from './firebase'
import ToggleDisplay from 'react-toggle-display';
import {observer} from "mobx-react";
import {observable} from "mobx";
import users from './store/user';
import {Link} from 'react-router'

@observer
export default class App extends Component {
    render() {
        return (
            <div>
              	<link href="css/reset.css" rel="stylesheet" type="text/css" />
              	<link href="css/style.css" rel="stylesheet" type="text/css" />
              	<link href="css/sp.css" rel="stylesheet" type="text/css" />
              	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
              <div id="wrapper">

              	<div className="cardCover white-cover">
              		<div className="cardCover__flow16-leadBlock">
              			<h3 className="lead-title">SOCIAL<br />RECORDS<span>連携済みの実績</span></h3>
              		</div>

              		<div className="cardCover__flow-socialBlock">
              			<div className="social-iconBox">
              				<p className="social_icon"><img src="img/common/icon_fb.png" alt="" /></p>
              				<p className="social_icon_text">Facebook</p>
              			</div>

              			<div className="social_FlendBox">
              				<span className="icon_check blue_check"><i className="fa fa-check-circle" aria-hidden="true"></i></span>
              				<p className="flendNummber">友達数<span>50人</span>以上</p>
              			</div>
              		</div>

              		<div className="cardCover__flow-socialTextBlock">
              			<p>実績を追加</p>
              		</div>



              	</div>

              	<div className="pager">
              		<span className="carrent"></span>
              		<span className=""></span>
              		<span className=""></span>
              		<span className=""></span>
              	</div>

                <div className="btnaction_LankUp">
                    <Link to="/register17">
                        <span><img src="/img/common/icon_crown.png" alt=""/></span>
                        <p>SNSアカウントを連携して<br/>ランクアップしよう！</p>
                    </Link>
                </div>

              </div>

              	<script src="js/jquery-2.1.4.min.js"></script>
              	<script src="js/app.js"></script>
                </div>
              )
          }
      }
