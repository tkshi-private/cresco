import React from 'react';
import {Link} from 'react-router'
import users from './store/user'
import {test} from './firebase';
import canvas from './canvas';

export default function(props) {
    return (
        <div>
          	<title>N-LICENCE</title>
          	<link href="css/reset.css" rel="stylesheet" type="text/css" />
          	<link href="css/style.css" rel="stylesheet" type="text/css" />
          	<link href="css/sp.css" rel="stylesheet" type="text/css" />
          	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <div id="wrapper">

          	<div className="cardCover white-cover">

          		<div className="cardCover__flow12-leadBlock">
          			<p className="lead-title">サインを記入しよう</p>
          		</div>

          		<div className="cardCover__RegistBlock">
          			<div className="nameRegist">
                <select id="penColor">
                    <option value="black">黒</option>
                    <option value="red">赤</option>
                    <option value="blue">青</option>
                    <option value="white">白</option>
                </select>
                <select id="penWidth">
                    <option value="1">細</option>
                    <option value="3">中</option>
                    <option value="5">太</option>
                </select>
                <input type="button" id="erase" value="消去" />
          				<canvas id="mycanvas" width="262px" height="55px">canvas</canvas>
                  <button id="button" onClick={test}>登録する</button>
                  <progress value="0" max="100" id="up">0%</progress>
          			</div>

          		</div>

          		<div className="btnAction-next">
          			<Link to={'/register14'}>次へ</Link>
          		</div>

          	</div>

          	<div className="pager">
          		<span className="carrent"></span>
          		<span className=""></span>
          		<span className=""></span>
          		<span className=""></span>
          	</div>

          	<div className="stepText__box">
          		<p>これで最後！</p>
          	</div>

          </div>

          	<script src="js/jquery-2.1.4.min.js"></script>
          	<script src="js/app.js"></script>
        </div>
    )
}
