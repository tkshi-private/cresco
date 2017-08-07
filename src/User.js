import React, {Component} from 'react';
import {login, getCurrentUser, register, getUser} from './firebase'
import ToggleDisplay from 'react-toggle-display';
import {observer} from "mobx-react";
import {observable} from "mobx";
import users from './store/user';
import {Link} from 'react-router'

@observer
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        const {uid} = this.props.params
        getUser(uid, (user) => {
            users.setViwerUser(user)
            this.setState({
                user: {
                    ...user
                }
            })
        })
    }
    render() {
        const {photoURL, displayName} = {
          photoURL:'',
          displayName:''
        }
        console.log(this.state)
        return (
            <div>
                <title>sp</title>
                <link href="/css/reset.css" rel="stylesheet" type="text/css"/>
                <link href="/css/style.css" rel="stylesheet" type="text/css"/>
                <link href="/css/sp.css" rel="stylesheet" type="text/css"/>
                <div id="wrapper">

                    <div className="cardCover white-logo">
                        <div className="cardCover__flow15-leadBlock">
                            <p className="lead-img"><img src="/img/common/sub_logo.png" alt=""/></p>
                        </div>

                        <div className="cardCover__flow-imgBlock15">
                            <p><img src={users.getViwerUser().photoURL} alt=""/></p>
                            <p className="profileName">{users.getViwerUser().displayName}</p>
                            <p className="profileNumbeer">{`No. N-${users.getViwerUser().uid}`}</p>
                        </div>

                        <div className="cardCover__flow-profBlock">
                            <span className="profIcon"><img src="/img/common/prof_01.png" alt=""/></span>
                            <p className="profLank">Beginner<span>ビギナー</span>
                            </p>
                            <p className="since">Since July 2016</p>
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
                            <span><img src="/img/common/icon_crown.png" alt=""/></span>
                            <p>SNSアカウントを連携して<br/>ランクアップしよう！</p>
                        </a>
                    </div>

                </div>
                <script src="/js/jquery-2.1.4.min.js"></script>
                <script src="/js/app.js"></script>

            </div>
        )
    }
}
