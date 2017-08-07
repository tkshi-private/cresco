import React, {Component} from 'react';
import {login, getCurrentUser, register} from './firebase'
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
                <title>N-LICENCE</title>
                <link href="/css/reset.css" rel="stylesheet" type="text/css"/>
                <link href="/css/style.css" rel="stylesheet" type="text/css"/>
                <link href="/css/sp.css" rel="stylesheet" type="text/css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div id="wrapper">

                    <div className="cardCover white-cover">
                        <div className="cardCover__flow17-leadBlock">
                            <h3 className="lead-title">ADD RECORDS<span>さらにアカウントを連携績</span>
                            </h3>
                        </div>

                        <div className="cardCover__flow-socialLinkBlock">
                            <ul className="solicalLink_icon">
                                <li>
                                    <a href="">
                                        <p className="social_icon_link"><img src="img/common/soclial_icon_01.png" alt=""/></p>
                                        <p className="social_icon_link_name">fasebook</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <p className="social_icon_link"><img src="img/common/soclial_icon_02.png" alt=""/></p>
                                        <p className="social_icon_link_name">Google</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <p className="social_icon_link"><img src="img/common/soclial_icon_03.png" alt=""/></p>
                                        <p className="social_icon_link_name">Twitter</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <p className="social_icon_link"><img src="img/common/soclial_icon_04.png" alt=""/></p>
                                        <p className="social_icon_link_name">Mercari</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <p className="social_icon_link"><img src="img/common/soclial_icon_05.png" alt=""/></p>
                                        <p className="social_icon_link_name">ヤフオク！</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <p className="social_icon_link"><img src="img/common/soclial_icon_06.png" alt=""/></p>
                                        <p className="social_icon_link_name">Anyca</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <p className="social_icon_link"><img src="img/common/soclial_icon_07.png" alt=""/></p>
                                        <p className="social_icon_link_name">UBER</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
              )
          }
      }
