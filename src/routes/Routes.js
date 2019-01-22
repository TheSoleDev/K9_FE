import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import HeroList from '../components/HeroList';


export default () => (
	<BrowserRouter>

		<Switch>
			<Route path="/" exact component={ Home } />
			<Route path="/register" exact component={ Register } />
			<Route path="/login" exact component={ Login } />				
			<Route path="/herolist" exact component={ HeroList } />				

		</Switch>
	</BrowserRouter>
)


			// <Route path="/herolist" 
			// 		exact render={() =>
			// 			loggedIn ? (
			// 					<HeroList/>
			// 				) : (
			// 					<Redirect to={{pathname: '/login'}} />
			// 				)
			// 		}
			//  />	