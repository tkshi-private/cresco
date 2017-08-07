import React from 'react';
import {Link} from 'react-router'

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
          				<form action="#" method="post">
          					<input type="text" name="name" placeholder="野村太郎" />
          				</form>
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
