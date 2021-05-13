import { FETCH_USER_PRODUCTS_SUCCESS } from '../types'


const INITIAL_STATE = {
products: []
}

const user = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_USER_PRODUCTS_SUCCESS:
			return { products: action.products }

		default:
			return state
	}
}

export default user