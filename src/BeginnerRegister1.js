import React from 'react';
import users from './store/user'


export default function(props){
  return(
    <div>
      <head>
      	<meta charset="utf-8" />
      	<meta name="keywords" content=",,," />
      	<meta name="description" content="" />
      	<meta name="viewport" content="width=device-width" />
      	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
      	<title>N-LICENCE</title>
      	<link href="css/reset.css" rel="stylesheet" type="text/css" />
      	<link href="css/style.css" rel="stylesheet" type="text/css" />
      	<link href="css/sp.css" rel="stylesheet" type="text/css" />
      	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body>
      <div id="wrapper" onClick={()=>{window.location.pathname = '/beginner_register2'}}>

      	<div className="cardCover green-cover">
      		<div className="cardCover__flow01-leadBlock">
      			<p className="lead-title">N.LICENSE</p>
      			<p className="sub-title">Social Network Credi</p>
      		</div>
      	</div>

      	<div className="pager">
      		<span className="carrent"></span>
      		<span className=""></span>
      		<span className=""></span>
      		<span className=""></span>
      	</div>

      	<div className="btnaction_LankUp">
      		<a href="">
      			<span><img src="img/common/icon_beg.png" alt=""/></span>
      			<p className="lead-text"><span className="sub-lead">あなたも今すぐ</span>無料でライセンスを取得!</p>
      		</a>
      	</div>

      </div>
      	<script src="js/jquery-2.1.4.min.js"></script>
      	<script src="js/app.js"></script>
      </body>
</div>
  )
}
