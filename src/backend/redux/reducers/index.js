import { combineReducers } from 'redux'
import products from '../reducers/products'
import selectedProduct from '../reducers/selectedProduct'
import auth from './auth'
import user from './user'
import createPendant from './createPendant'
import cart from './cart'


const productApp = combineReducers({
	products,
	user,
	createPendant,
	cart,
	selectedProduct,
	auth
})

export default productApp