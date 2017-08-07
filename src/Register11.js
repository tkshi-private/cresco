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
          		<div className="cardCover__flow-imgBlock09">
          			<p><img src="img/common/icon_camela.png" alt=""/></p>
          		</div>

          		<div className="tel_lead">
          			<p>身分証を登録しよう！</p>
          		</div>


          		<div className="btnAction-Click active">
          			<ul className="filmLink">
          				<li><Link to="/register12">あとで</Link></li>
          				<li><a href="">撮影</a></li>
          			</ul>
          		</div>

          	</div>

          	<div className="pager">
          		<span className="carrent"></span>
          		<span className=""></span>
          		<span className=""></span>
          		<span className=""></span>
          	</div>

          	<div className="stepText__box">
          		<p>のこり１ステップ！</p>
          	</div>

          </div>

          	<script src="js/jquery-2.1.4.min.js"></script>
          	<script src="js/app.js"></script>
        </div>
    )
}
