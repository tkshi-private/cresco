import React from 'react';

export default function(props) {
    return (
        <div>
          <head>
          	<meta charset="utf-8"/>
          	<meta name="keywords" content=",,,"/>
          	<meta name="description" content=""/>
          	<meta name="viewport" content="width=device-width"/>
          	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          	<title>sp</title>
          	<link href="css/reset.css" rel="stylesheet" type="text/css" />
          	<link href="css/style.css" rel="stylesheet" type="text/css" />
          	<link href="css/sp.css" rel="stylesheet" type="text/css" />
          	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          </head>
          <body>
          <div id="wrapper">

          	<div className="cardCover white-cover">
          		<div className="cardCover__flow-imgBlock09">
          			<p><img src="img/common/icon_camela.png" alt=""/></p>
          		</div>

          		<div className="tel_lead">
          			<p>身分証を登録しよう！</p>
          		</div>


          		<div className="btnAction-Click active">
          			<ul className="filmLink">
          				<li><a href="">あとで</a></li>
          				<li><a href="">撮影</a></li>
          			</ul>
          		</div>

          	</div>

          	<div className="pager">
          		<span className="carrent"></span>
          		<span className=""></span>
          		<span className=""></span>
          		<span className=""></span>
          	</div>

          	<div className="stepText__box">
          		<p>のこり１ステップ！</p>
          	</div>

          </div>

          	<script src="js/jquery-2.1.4.min.js"></script>
          	<script src="js/app.js"></script>
          </body>
        </div>
    )
}
