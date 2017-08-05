import React from 'react';

export default function(props) {
    return (
        <div>
          <head>
          	<meta charset="utf-8" />
          	<meta name="keywords" content=",,," />
          	<meta name="description" content="" />
          	<meta name="viewport" content="width=device-width" />
          	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
          	<title>sp</title>
          	<link href="css/reset.css" rel="stylesheet" type="text/css" />
          	<link href="css/style.css" rel="stylesheet" type="text/css" />
          	<link href="css/sp.css" rel="stylesheet" type="text/css" />
          	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          </head>
          <body>
          <div id="wrapper">

          	<div className="cardCover white-cover">

          		<div className="cardCover__flow12-leadBlock">
          			<p className="lead-title">サインを記入しよう</p>
          		</div>

          		<div className="cardCover__RegistBlock">
          			<div className="nameRegist">
          				<form action="#" method="post">
          					<input type="text" name="name" placeholder="野村太郎" />
          				</form>
          			</div>

          		</div>

          		<div className="btnAction-next">
          			<a href="#">次へ</a>
          		</div>

          	</div>

          	<div className="pager">
          		<span className="carrent"></span>
          		<span className=""></span>
          		<span className=""></span>
          		<span className=""></span>
          	</div>

          	<div className="stepText__box">
          		<p>これで最後！</p>
          	</div>

          </div>

          	<script src="js/jquery-2.1.4.min.js"></script>
          	<script src="js/app.js"></script>
          </body>
        </div>
    )
}