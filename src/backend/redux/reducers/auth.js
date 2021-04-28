import { SET_AUTH_USER, RESET_AUTH_STATE, SET_USER_ATTRIBUTES, FETCH_USER_PRODUCTS_SUCCESS } from '../types'


const INITIAL_STATE = {
	user: {},
	isAuthResolved: false
}

const auth = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SET_AUTH_USER:
			console.log("set user info in reducer", action.user);
			return { user: action.user, isAuthResolved: action.user?true:false }
		case SET_USER_ATTRIBUTES:
			return { ...state, user: {...state.user, attributes: action.attributes }}
		case RESET_AUTH_STATE:
			console.log("reset user info", action.user);
			return { user: null, isAuthResolved: false }
		case FETCH_USER_PRODUCTS_SUCCESS:
			return { ...state, user: {...state.user, products: action.products }}
		default:
			return state
	}
}

export default auth