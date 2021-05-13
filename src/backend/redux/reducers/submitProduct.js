import { SUBMIT_PRODUCT } from '../types'


const intialState = {
	product: { image: null, filter: 0, pendant: 0 }
}

const submitProduct = (state = intialState, action) => {
	switch(action.type) {
		case SUBMIT_PRODUCT: 
			return {
			...state, 
			product: action.payload }
		default:
			return state
	}
}

export default submitProduct