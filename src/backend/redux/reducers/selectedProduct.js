import { FETCH_PRODUCT_SUCCESS, REQUEST_PRODUCT } from '../types'
import { combineReducers } from 'redux'


const initSelectedProduct = () => {

	const item = (state = {}, action) => {

		switch(action.type) {
			case FETCH_PRODUCT_SUCCESS:
				return action.product
			default:
				return state	
			}
		}

		const isFetching = (state = false, action) => {
			switch(action.type) {
				case REQUEST_PRODUCT: 
					return true
				case FETCH_PRODUCT_SUCCESS:
					return false
				default:
					return state
			}
		}

		return combineReducers({
			item,
			isFetching
	})
}

const selectedProduct = initSelectedProduct()

export default selectedProduct