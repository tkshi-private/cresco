import React from 'react';

export default function(){
  return(
    <div>
      <title>N-LICENCE</title>
      <link href="css/reset.css" rel="stylesheet" type="text/css"/>
      <link href="css/style.css" rel="stylesheet" type="text/css"/>
      <link href="css/sp.css" rel="stylesheet" type="text/css"/>
      <div id="wrapper">

      	<div className="cardCover white-cover">
      		<div className="cardCover__flow02-leadBlock">
            <p className="sub-title">N.LICENSEの特徴③</p>
      			<p className="lead-title">もしもの時に安心、<br/>取引保証保険。</p>
      		</div>

      		<div className="cardCover__flow-imgBlock04">
      			<p><img src="img/common/icon_03.png" alt=""/></p>
      		</div>

          <div className="cardCover__flow04-textBlock">
            <p>もしもあなたが取引で<br/>損害を出してしまった場合に、<br/>保険会社が取引を最大30万円まで<br/>保証します。</p>
      		</div>

          <div className="btnAction">
            <a href="">今すぐ登録</a>
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
    </div>
  )
}
