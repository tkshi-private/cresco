import React, {Component} from 'react';
import {login, getCurrentUser} from './firebase'
import ToggleDisplay from 'react-toggle-display';
import {observer} from "mobx-react";
import {observable} from "mobx";
import users from './store/user';
import {Link} from 'react-router';
import {upload} from './firebase';
import {test} from './firebase';
import {canvasUpload} from './firebase';
import canvas from './canvas';

import ReactSwipe from 'react-swipe';


@observer
export default class App extends Component {
  handleChangePhoneNumber(phoneNumber){
    users.getMyUser().phoneNumber = phoneNumber
  }

    render() {
      let me = users.getMyUser()
        return (
            <div>
                <meta charset="utf-8"/>
                <meta name="keywords" content=",,,"/>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <title>N-LICENCE</title>
                <link href="css/reset.css" rel="stylesheet" type="text/css"/>
                <link href="css/style.css" rel="stylesheet" type="text/css"/>
                <link href="css/sp.css" rel="stylesheet" type="text/css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div id="wrapper">

<ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
<div className="regi6">
  <div className="cardCover white-cover">
    <div className="cardCover__flow06-leadBlock">
        <p className="lead-title">Facebookまたは<br/>Twitterで登録しよう！</p>
    </div>

    <div className="cardCover__RegistBlock">
        <div className="btnRegist">
            <ToggleDisplay show={!users.getMyUser().email}>
                <a href="#" onClick={login}>
                    <span className="icon_check">
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </span>
                    <p className="Regist_text">Facebookで登録</p>
                </a>
            </ToggleDisplay>
            <ToggleDisplay show={users.getMyUser().email}>
                <a href="#">
                    <span className="icon_check active">
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </span>
                    <p className="Regist_text active">Facebookで登録</p>
                </a>
            </ToggleDisplay>
        </div>
    </div>

    <div className="btnAction-next">
        <Link to="/register9">次へ</Link>
    </div>
  </div>
</div>

<div className="regi9">
  <div className="cardCover white-cover">
    <div className="cardCover__flow-imgBlock09">
      <p><img src="img/common/icon_tel.png" alt=""/></p>
    </div>

    <div className="tel_lead">
      <p>電話番号を登録しよう！</p>
    </div>

    <div className="cardCover__RegistBlock">
      <div className="telRegist">
        <form action="#" method="post">
          <input value={me.phoneNumber} type="tel" name="tel" placeholder="例）090-0123-4567" onChange={(e)=>{this.handleChangePhoneNumber(e.target.value)}} />
        </form>
      </div>
    </div>

    <div className="btnAction-next">
      <Link to="/register11">次へ</Link>
    </div>

  </div>
</div>
<div className="regi11">

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

</div>
<div className="regi12">
  <div className="cardCover-SideLayout white-cover">

    <div className="cardCover__flow12-leadBlock">
      <p className="lead-title">サインを記入しよう</p>
    </div>

    <div className="cardCover__RegistBlock">
      <div className="nameRegist">
        <div><input type="button" id="erase" value="消去" /></div>
        <canvas id="mycanvas" width="440px" height="85px">canvas</canvas>
      </div>

    </div>

    <div className="btnAction-next">
      {/*<div className="btnClick" onClick={() => { canvasUpload(function(){ props.router.push('/register13'); });  }}>次へ</div>*/}
    </div>

  </div>
</div>
<div className="regi13">
  <div className="cardCover-SideLayout white-cover">

    <div className="cardCover__flow12-leadBlock">
      <p className="lead-title">サインを記入しよう</p>
    </div>

    <div className="cardCover__RegistBlock">
      <div className="nameRegist">
        <div className="DounloadImg"><img id="myimg" src="" /></div>
      </div>

    </div>

    <div className="btnAction-next">
      <Link to={'/register14'}>次へ</Link>
    </div>

  </div>
</div>
<div className="regi14">
<div className="cardCover white-cover">
  <div className="cardCover__flow-imgBlock09">
    <p><img src="img/common/icon_comp.png" alt=""/></p>
  </div>

  <div className="tel_lead">
    <p>登録が完了しました！</p>
  </div>

  <div className="btnAction">
    <Link to={`/user/${users.getMyUser().uid}`}>さっそくライセンスを見る</Link>
  </div>

</div>
</div>
</ReactSwipe>


                        <div className="pager">
                            <span className="carrent"></span>
                            <span className=""></span>
                            <span className=""></span>
                            <span className=""></span>
                        </div>

                        <div className="stepText__box">
                            <p>ライセンス発行まであと3ステップ！</p>
                        </div>
                    </div>
            </div>
        )
    }
}
