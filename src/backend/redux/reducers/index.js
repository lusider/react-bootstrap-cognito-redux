import { combineReducers } from 'redux'
import products from '../reducers/products'
import selectedProduct from '../reducers/selectedProduct'
import auth from './auth'


const productApp = combineReducers({
	products,
	selectedProduct,
	auth
})

export default productApp