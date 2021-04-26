import { FETCH_PRODUCTS_SUCCESS } from '../types'
import { combineReducers } from 'redux'



const initProducts = () => {
	const all = (state = [], action) => {
		switch(action.type) {
			case FETCH_PRODUCTS_SUCCESS:
				return action.products
			default:
				return state
		}
	
	}

	return combineReducers({all})
}

const products = initProducts()

export default products