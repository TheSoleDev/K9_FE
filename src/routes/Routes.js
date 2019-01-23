import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import Register from '../components/Register';
import HeroList from '../components/HeroList';
import ListItem from '../ListItem';


export default () => (
	<BrowserRouter>

		<Switch>
			<Route path="/" exact component={ Home } />
			<Route path="/register" exact component={ Register } />
			<Route path="/login"  exact component={ Home } />				
			<Route path="/herolist" exact component={ HeroList } />				
			<Route path="/listitem" exact component={ ListItem } />					

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