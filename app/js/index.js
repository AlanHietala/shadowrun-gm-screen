import  '../styles/main.css';
import AppLayout from  './components/AppLayout';
import Category from './components/Category';
import React from 'react';
import ReactDOM from 'react-dom';
import CombatSequence from './components/CombatSequence';
import Modifiers from './components/Modifiers';
import VehicleSequence from './components/VehicleSequence';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';



// Required for replaying actions from devtools to work


ReactDOM.render(
	<div>
	<Router history={hashHistory}>
	<Route path="/" component={AppLayout}>
		<IndexRedirect to="/meat" />
		<Route path="/meat" component={ Category } />
		<Route path="/matrix" component={ Category } />
		<Route path="/social" component={ Category } />
		<Route path="/combat" component={ CombatSequence } />
		<Route path="/modifiers" component={ Modifiers } />
		<Route path="/spells" component={ Category } />
		<Route path="/vehicle" component={ VehicleSequence } />
	</Route>
	</Router>
	</div>,
	document.getElementById('app')
)