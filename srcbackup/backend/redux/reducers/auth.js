import { SET_AUTH_USER, RESET_AUTH_STATE, FETCH_USER_PRODUCTS_SUCCESS } from '../types'


const INITIAL_STATE = {
	user: {},
	isAuth: false,
	isAuthResolved: false
}

const auth = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SET_AUTH_USER:
			return { user: action.user, isAuthResolved: true }
		case RESET_AUTH_STATE:
			return { ...state, isAuthResolved: false }
		case FETCH_USER_PRODUCTS_SUCCESS:
			return { ...state, user: {...state.user, products: action.products }}
		default:
			return state
	}
}

export default auth