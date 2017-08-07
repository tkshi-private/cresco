import {observer} from "mobx-react";
import React, {Component} from 'react';
import users from './store/user'
import {serialize, deserialize} from "serializr";
import {Link} from 'react-router'

@observer
export default class App extends Component {
handleChangePhoneNumber(phoneNumber){
  users.getMyUser().phoneNumber = phoneNumber
}
render(){
  let me = users.getMyUser()
  return (
      <div>
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
        <div id="wrapper">

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

          <div className="pager">
            <span className="carrent"></span>
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
          </div>

          <div className="stepText__box">
            <p>あと2ステップ！</p>
          </div>

        </div>

          <script src="js/jquery-2.1.4.min.js"></script>
          <script src="js/app.js"></script>
      </div>
  )
}

}
