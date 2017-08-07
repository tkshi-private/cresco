import React from 'react';
import {Link} from 'react-router'

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
      	<link href="css/reset.css" rel="stylesheet" type="text/css"/>
      	<link href="css/style.css" rel="stylesheet" type="text/css"/>
      	<link href="css/sp.css" rel="stylesheet" type="text/css"/>
      </head>
      <body>
      <div id="wrapper">

      	<div className="cardCover greenLine">
      		<div className="cardCover__flowbeginer-leadBlock">
      			<p className="lead-title">取引保障されています</p>
      			<p className="sub-title">ソーシャルエコノミー保険</p>
      			<p className="company-name"><span>by</span><img src="img/common/sony_insurance.png" alt=""/></p>
      		</div>


      		<div className="cardCover__flow-imgBlock05">
      			<p><img src="img/common/icon_03.png" alt=""/></p>
      		</div>

      		<div className="cardCover__flow-infoBlock">
      			<p className="info_text">もしもこのユーザーとの取引で<br/>損害を受けた場合に、<br/>30万円まで保証されます。<br/>安心してお取引してください</p>
      			<p className="info_link"><a href="#">詳しく見る</a></p>
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
