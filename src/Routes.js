import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import ConfirmPage from './pages/ConfirmSignUp'
import UserDetails from './pages/UserDetails'

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
			<Route path="/user-details">
			  <UserDetails />
			</Route>			
		</Switch>
	)
}

export default Routes