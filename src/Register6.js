import React, {Component} from 'react';
import {login, getCurrentUser} from './firebase'
import ToggleDisplay from 'react-toggle-display';
import {observer} from "mobx-react";
import {observable} from "mobx";
import users from './store/user';
import {Link} from 'react-router'

@observer
export default class App extends Component {
    render() {
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

                                <div className="btnRegist">
                                  <ToggleDisplay show={!users.getMyUser().email}>
                                      <a href="#" onClick={login}>
                                          <span className="icon_check">
                                              <i className="fa fa-check-circle" aria-hidden="true"></i>
                                          </span>
                                          <p className="Regist_text">Googleで登録</p>
                                      </a>
                                  </ToggleDisplay>
                                  <ToggleDisplay show={users.getMyUser().email}>
                                      <a href="#">
                                          <span className="icon_check active">
                                              <i className="fa fa-check-circle" aria-hidden="true"></i>
                                          </span>
                                          <p className="Regist_text">Googleで登録</p>
                                      </a>
                                  </ToggleDisplay>
                                </div>
                            </div>

                            <div className="btnAction-next">
                                <Link to="/register9">次へ</Link>
                            </div>

                        </div>

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
