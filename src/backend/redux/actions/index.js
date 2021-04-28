
import { 
    // FETCH_POSTS_SUCCESS, 
    // FETCH_POST_SUCCESS,
    // REQUEST_POST,
    SET_USER_ATTRIBUTES,
    SET_AUTH_USER,
    RESET_AUTH_STATE,
    } from '../types'
  import * as auth from '../../auth'

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




export const register = ({ username, password, email }) => auth.register({ username, password, email })
export const storeAuthUser = authUser => dispatch => {
  console.log("stor eAuthUser")
  return (
    auth
      .getUserProfile()
      .then(currentAuthenticatedUser =>{
        console.log("set user info in actions");
        dispatch({user: currentAuthenticatedUser, type: SET_AUTH_USER})
      } )
  )}

export const login = ({ username, password }) => dispatch => 
auth.login({ username, password }).then(res => dispatch({user: res, type: SET_AUTH_USER}));

export const confirm = ({ username, confirmcode }) => auth.confirm({ username, confirmcode });

export const logout = () => dispatch => 
  auth.logout()
  .then(_ => dispatch({user: null, type: RESET_AUTH_STATE}))


export const onAuthStateChanged = (onAuthCallback) => auth.onAuthStateChanged(onAuthCallback)


export const resetAuthState = () => ({type: RESET_AUTH_STATE})

export const setUserAttributes = userAttributes => dispatch => 
auth.setUserAttributes(userAttributes).then(res => dispatch({user: res, type: SET_AUTH_USER}));

// export const setUserAttributes = ({ username, password, email }) => auth.setUserAttributes({ username, password, email })