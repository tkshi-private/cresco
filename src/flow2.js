import React from 'react';
import users from './store/user'
import {Link} from 'react-router'

export default function(){
  return(
    <div>
      <title>N-LICENCE</title>
      <link href="css/reset.css" rel="stylesheet" type="text/css"/>
      <link href="css/style.css" rel="stylesheet" type="text/css"/>
      <link href="css/sp.css" rel="stylesheet" type="text/css"/>
      <div id="wrapper">
      <Link to={'/flow3'}>
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
      </Link>

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
    </div>
  )
}
