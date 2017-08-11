import {observer} from "mobx-react";
import React, {Component} from 'react';
import users from './store/user'
import {serialize, deserialize} from "serializr";
import {Link} from 'react-router'
import {identificationImgURLregister} from './firebase';


@observer
export default class App extends Component {
handleChangePhoneNumber(identificationImgURL){
  identificationImgURLregister(identificationImgURL)
  users.getMyUser().identificationImgURL = identificationImgURL
}
render(){
  let me = users.getMyUser()
  return (
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
            <p>{me.identificationImgURL}</p>
      		</div>

          <div className="cardCover__RegistBlock">
            <div className="telRegist">
              <form action="#" method="post">
                <input value={me.identificationImgURL} type="tel" name="tel" placeholder="例）090-0123-4567" onChange={(e)=>{this.handleChangePhoneNumber(e.target.value)}} />
              </form>
            </div>
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

}
