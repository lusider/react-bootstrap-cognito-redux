import React from 'react'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import Spinner from './components/Spinner'
import Routes from './Routes'
import { logout } from './backend/redux/actions'







class ProductApp extends React.Component {
	
	handleLogout = () => this.props.dispatch(logout())

	renderApplication = auth =>
		<React.Fragment>
	        <NavBar
	        	id="navbar-main"
	        	logout={this.handleLogout}
	        	auth={auth}/>
    		<Routes />
		</React.Fragment>

	render () {
		const { auth } = this.props
		return auth ? this.renderApplication(auth) : <Spinner />
	}
}

const mapStateToProps = state => ({auth: state.auth})


export default connect(mapStateToProps)(ProductApp)


