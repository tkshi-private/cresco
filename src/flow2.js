import React from 'react';

export default function(){
  return(
    <div>
      <head>
      	<meta charset="utf-8" />
      	<meta name="keywords" content=",,," />
      	<meta name="description" content="" />
      	<meta name="viewport" content="width=device-width" />
      	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
      	<title>N-LICENCE</title>
      	<link href="/css/reset.css" rel="stylesheet" type="text/css" />
      	<link href="/css/style.css" rel="stylesheet" type="text/css" />
      	<link href="/css/sp.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
      <div id="wrapper">

      	<div className="cardCover white-cover">
      		<div className="cardCover__flow02-leadBlock">
            <p className="sub-title">N.LICENSEの特徴①</p>
      			<p className="lead-title">無料で”N.LICENSE”を<br/>取得しよう！</p>
      		</div>

      		<div className="cardCover__flow-imgBlock02">
      			<p><img src="img/common/img_01.png" alt=""/></p>
      		</div>

          <div className="cardCover__flow02-textBlock">
      			<p>オンラインでの信用力を証明して、あなたの取引を<br/>有利にしましょう！</p>
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
