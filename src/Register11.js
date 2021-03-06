import React from 'react';
import {Link} from 'react-router'
import users from './store/user'
import {upload} from './firebase';
import {test} from './firebase';

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

          		<div id="telBtn" onClick={test} className="tel_lead" >
          			<p>アップロードしよう！</p>
          		</div>

              <div id="tel-Upload">
                <progress value="0" max="100" id="up">0%</progress>
                <input type="file" id="fileButton" onChange={upload} />
              </div>

          		<div className="btnAction-Click active">
          			<ul className="filmLink">
          				<li><Link to="/register12">あとで</Link></li>
          				<li><Link to="/register12">撮影</Link></li>
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
