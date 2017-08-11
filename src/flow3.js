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
      <Link to={'/flow4'}>
      	<div className="cardCover white-cover">
      		<div className="cardCover__flow02-leadBlock">
            <p className="sub-title">N.N.LICENSEの特徴②</p>
      			<p className="lead-title">”N.LICENSE”が<br/>オンラインの信用力を証明！</p>
      		</div>

      		<div className="cardCover__flow-imgBlock02">
      			<p><img src="img/common/img_01.png" alt=""/></p>
      		</div>

          <div className="cardCover__flow03-textBlock">
            <p>”N.LICENSE”は<br/>SNSアカウントの連携や<br/>電話番号の認証によって<br/>あなたのオンライン取引の信用度を<br/>見える化します。</p>
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
      		<Link to={'/register6'}>
      			<span><img src="img/common/icon_beg.png" alt=""/></span>
      			<p className="lead-text"><span className="sub-lead">あなたも今すぐ</span>無料でライセンスを取得!</p>
      		</Link>
      	</div>
      </div>
    </div>
  )
}
