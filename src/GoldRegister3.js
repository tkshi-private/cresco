import React from 'react';
import users from './store/user'
import {Link} from 'react-router'


export default function(props) {
    return (
        <div>
            <title>sp</title>
            <link href="css/reset.css" rel="stylesheet" type="text/css"/>
            <link href="css/style.css" rel="stylesheet" type="text/css"/>
            <link href="css/sp.css" rel="stylesheet" type="text/css"/>
            <div id="wrapper">

                <div className="cardCover white-logo">
                    <div className="cardCover__flow15-leadBlock">
                        <p className="lead-img"><img src="img/common/sub_logo.png" alt=""/></p>
                    </div>

                    <div className="cardCover__flow-imgBlock15">
                        <p><img src="img/common/img_03.png" alt=""/></p>
                        <p className="profileName"><img src="img/common/name_01.png" alt=""/></p>
                        <p className="profileNumbeer">No. N-123001117111</p>
                    </div>

                    <div className="cardCover__flow-profBlock">
                        <span className="profIcon"><img src="img/common/prof_02.png" alt=""/></span>
                        <p className="profLank gold">Gold License<span>ゴールドラインセンス</span>
                        </p>
                        <p className="since">Since July 2016</p>
                    </div>

                    <div className="cardCover__flow-licenseBlock">
                        <div className="icon_check"><img src="img/common/icon_chek.png" alt=""/></div>
                        <p className="license_text">実績を見て見ましょう！</p>
                    </div>
                </div>

                <div className="pager">
                    <span className="carrent"></span>
                    <span className=""></span>
                    <span className=""></span>
                    <span className=""></span>
                </div>

                <div className="btnaction_LankUp">
                    <Link to={'/register6'}>
                        <span><img src="img/common/icon_beg.png" alt=""/></span>
                        <p className="lead-text">
                            <span className="sub-lead">あなたも今すぐ</span>無料でライセンスを取得!</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}
