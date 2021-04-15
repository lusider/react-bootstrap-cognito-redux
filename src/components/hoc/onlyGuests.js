
import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'



const onlyGuests = Component => {
	class OnlyGuests extends React.Component {




		render() {
			const { auth, dispatch, ...rest } = this.props
			return auth.isAuth ? <Redirect to="/" /> : <Component {...rest} />

		}
	}
	
	return connect(({auth}) => ({auth}))(OnlyGuests)
}

export default onlyGuests
