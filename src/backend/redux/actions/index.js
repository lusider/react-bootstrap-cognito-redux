
import { 
    // FETCH_POSTS_SUCCESS, 
    // FETCH_POST_SUCCESS,
    // REQUEST_POST,
    SET_AUTH_USER,
    RESET_AUTH_STATE,
    } from '../types'
  import * as auth from '../../auth'
  import { Auth } from 'aws-amplify'
//   import * as api from '../../api'

// export const fetchProducts = () => dispatch => 
// api
//   .fetchProducts()
//   .then(products => dispatch(
//     {
//       type: FETCH_PRODUCTS_SUCCESS,
//       products
//     }
//   )
// )

// export const fetchUserProducts = userId => dispatch =>
// api.fetchUserProducts(userId).then(products => 
// dispatch({type: FETCH_USER_PRODUCTS_SUCCESS, products}))


// export const fetchProductById = productId => (dispatch, getState) => {

// const lastProduct = getState().selectedProduct.item
// if (lastProduct.id === productId) { return Promise.resolve() }
// dispatch({type: FETCH_PRODUCT_SUCCESS, product: {}})
// dispatch({type: REQUEST_PRODUCT, product: {}})
// return api
//   .fetchProductById(productId)
//   .then(product => dispatch(
//     {
//       type: FETCH_PRODUCT_SUCCESS,
//       product
//     }
//   )
// )
// }




export const register = registerFormData => Auth.register({...registerFormData})
export const login = loginFormData => auth.login({...loginFormData})

export const logout = () => dispatch => 
  auth.logout()
  .then(_ => dispatch({user: null, type: RESET_AUTH_STATE}))


export const onAuthStateChanged = (onAuthCallback) => auth.onAuthStateChanged(onAuthCallback)

export const storeAuthUser = authUser => dispatch => {
    if (authUser) {
      return auth
        .getUserProfile()
        .then(currentAuthenticatedUser => dispatch({user: currentAuthenticatedUser, type: SET_AUTH_USER}))
    } else {
        return dispatch({user: null, type: SET_AUTH_USER})
    }
  }

export const resetAuthState = () => ({type: RESET_AUTH_STATE})

export const c = () => ({type: RESET_AUTH_STATE})