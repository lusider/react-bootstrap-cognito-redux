import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import ConfirmPage from './pages/ConfirmSignUp'


const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact>
			  <HomePage />
			</Route>
		    <Route path="/login">
		      <LoginPage />
		    </Route>
			<Route path="/register">
		      <RegisterPage />
		    </Route>
			<Route path="/confirm">
		      <ConfirmPage />
		    </Route>
		    <Route path="/profile">
			  <ProfilePage />
			</Route>		
		</Switch>
	)
}

export default Routes