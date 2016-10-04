import bootstrap from 'bootstrap-loader';
import AppLayout from  './components/AppLayout';
import Category from './components/Category';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';



// Required for replaying actions from devtools to work


ReactDOM.render(
	<div>
	<Router history={hashHistory}>
	<Route path="/" component={AppLayout}>
	<IndexRoute component={Category}/>
		<Route path=":category" component={Category} />
	</Route>
	</Router>
	</div>,
	document.getElementById('app')
)