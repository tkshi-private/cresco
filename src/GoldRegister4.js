import React from 'react';
import users from './store/user'
import {Link} from 'react-router'


export default function(props) {
    return (
        <div>
          	<title>sp</title>
          	<link href="/css/reset.css" rel="stylesheet" type="text/css" />
          	<link href="/css/style.css" rel="stylesheet" type="text/css" />
          	<link href="/css/sp.css" rel="stylesheet" type="text/css" />
          	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <div id="wrapper">

          	<div className="cardCover white-cover">
          		<div className="cardCover__flow16-leadBlock">
          			<h3 className="lead-title">SOCIAL<br/>RECORDS<span>実績</span></h3>
          		</div>

          		<div className="cardCover__flow-socialBlock">
          			<div className="social-iconBox">
          				<p className="social_icon"><img src="img/common/icon_fb.png" alt=""/></p>
          				<p className="social_icon_text">Facebook</p>
          			</div>

          			<div className="social_FlendBox">
          				<span className="icon_check blue_check"><i className="fa fa-check-circle" aria-hidden="true"></i></span>
          				<p className="flendNummber">友達数<span>50人</span>以上</p>
          			</div>
          		</div>

          		<div className="cardCover__flow-socialBlock">
          			<div className="social-iconBox">
          				<p className="social_icon"><img src="img/common/icon_mel.png" alt=""/></p>
          				<p className="social_icon_text">メルカリ</p>
          			</div>

          			<div className="social_FlendBox">
          				<span className="icon_check red_check"><i className="fa fa-check-circle" aria-hidden="true"></i></span>
          				<p className="flendNummber red_text">良い評価<span>30件</span>以上</p>
          			</div>
          		</div>

          		<div className="cardCover__flow-socialBlock">
          			<div className="social-iconBox">
          				<p className="social_icon"><img src="img/common/icon_air.png" alt=""/></p>
          				<p className="social_icon_text">Airbnb</p>
          			</div>

          			<div className="social_FlendBox">
          				<div className="social_FlendBox-inBlock">
          					<span className="icon_check hired_check"><i className="fa fa-check-circle" aria-hidden="true"></i></span>
          					<p className="flendNummber hired_text">友達数<span>50人</span>以上</p>
          				</div>
          				<div className="social_FlendBox-inBlock">
          					<span className="icon_check hired_check"><i className="fa fa-check-circle" aria-hidden="true"></i></span>
          					<p className="flendNummber hired_text">友達数<span>50人</span>以上</p>
          				</div>
          			</div>
          		</div>

          		<div className="cardCover__flow-socialBlock">
          			<div className="social-iconBox">
          				<p className="social_icon"><img src="img/common/icon_uber.png" alt=""/></p>
          				<p className="social_icon_text">UBER</p>
          			</div>

          			<div className="social_FlendBox">
          				<div className="social_FlendBox-inBlock">
          					<span className="icon_check gray_check"><i className="fa fa-check-circle" aria-hidden="true"></i></span>
          					<p className="flendNummber gray_text">友達数<span>50人</span>以上</p>
          				</div>
          				<div className="social_FlendBox-inBlock">
          					<span className="icon_check gray_check"><i className="fa fa-check-circle" aria-hidden="true"></i></span>
          					<p className="flendNummber gray_text">友達数<span>50人</span>以上</p>
          				</div>
          			</div>
          		</div>
          	</div>

          	<div className="pager">
          		<span className="carrent"></span>
          		<span className=""></span>
          		<span className=""></span>
          		<span className=""></span>
          	</div>

          	<div className="btnaction_LankUp">
              <Link to={'/register6'}>
                  <span><img src="img/common/icon_beg.png" alt=""/></span>
                  <p className="lead-text">
                      <span className="sub-lead">あなたも今すぐ</span>無料でライセンスを取得!</p>
              </Link>
          	</div>

          </div>

          	<script src="js/jquery-2.1.4.min.js"></script>
          	<script src="js/app.js"></script>
        </div>
    )
}
