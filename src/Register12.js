import React from 'react';
import {Link} from 'react-router'
import users from './store/user'
import {canvasUpload} from './firebase';
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

          	<div className="cardCover-SideLayout white-cover">

          		<div className="cardCover__flow12-leadBlock">
          			<p className="lead-title">サインを記入しよう</p>
          		</div>

          		<div className="cardCover__RegistBlock">
          			<div className="nameRegist">
                  <div><input type="button" id="erase" value="消去" /></div>
          				<canvas id="mycanvas" width="440px" height="65px">canvas</canvas>
                  <div><input type="submit" id="save" value="登録する" onClick={canvasUpload}/></div>
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
