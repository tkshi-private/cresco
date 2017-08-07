import React from 'react';
import users from './store/user'
import {Link} from 'react-router'


export default function(){
  return(
    <div>
      	<title>sp</title>
      	<link href="/css/reset.css" rel="stylesheet" type="text/css"/>
      	<link href="/css/style.css" rel="stylesheet" type="text/css"/>
      	<link href="/css/sp.css" rel="stylesheet" type="text/css"/>
      	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <div id="wrapper">

      	<div className="bgmerlari">
      		<div className="nice-btnBox">
      			<span className="nice_check"><i className="fa fa-check-circle" aria-hidden="true"></i></span>
      			<Link to='/gold_register3' className="nice-text">N-LICENCE</Link>
      		</div>
      	</div>
      </div>

      	<script src="js/jquery-2.1.4.min.js"></script>
</div>
  )
}
