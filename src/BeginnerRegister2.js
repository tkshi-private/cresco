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

      	<div className="cardCover white-logo">
      		<div className="cardCover__flow15-leadBlock">
      			<p className="lead-img"><img src="img/common/sub_logo.png" alt=""/></p>
      		</div>

      		<div className="cardCover__flow-imgBlock15">
      			<p><img src="img/common/img_02.png" alt=""/></p>
      			<p className="profileName">池田はるな</p>
      			<p className="profileNumbeer">No. N-123001117111</p>
      		</div>

      		<div className="cardCover__flow-profBlock">
      			<span className="profIcon"><img src="img/common/prof_01.png" alt=""/></span>
      			<p className="profLank">Beginner<span>ビギナー</span></p>
      			<p className="since">Since July 2016</p>
      		</div>

      		<div className="cardCover__flow-securityBlock" onClick={()=>{window.location.pathname = '/beginner_register3'}}>
      			<div className="icon_sec"><img src="img/common/icon_sec.png" alt=""/></div>
      			<p className="security_text">このユーザーとの取引は<br />保険で保障されています</p>
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
