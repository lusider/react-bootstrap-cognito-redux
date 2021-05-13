
import { 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCT_SUCCESS,
    REQUEST_PRODUCT,
    SET_AUTH_USER,
    RESET_AUTH_STATE,
    ON_FILTER_CHANGE,
    ON_CROP_CHANGE,
    ON_CROP_COMPLETE,
    ON_ZOOM_CHANGE,
    ON_IMAGE_UPLOAD,
    SHOW_CROPPED_IMAGE,
    ON_PENDANT_CHANGE,
    ON_STEP_CHANGE,
    RESET_PRODUCT,
    FETCH_USER_PRODUCTS_SUCCESS,
    ON_DESCRIPTION_CHANGE,
    ON_TITLE_CHANGE
    } from '../types'

  import * as auth from '../../auth'

  import * as api from '../../api'



export const fetchProducts = () => dispatch => 
  api
    .fetchProducts()
    .then(products => dispatch(
      {
        type: FETCH_PRODUCTS_SUCCESS,
        products
      }
    )
  )

export const fetchUserProducts = userId => dispatch =>
  api.fetchUserProducts(userId).then(products => 
  dispatch({type: FETCH_USER_PRODUCTS_SUCCESS, products}))


export const fetchProductById = productId => (dispatch, getState) => {

  const lastProduct = getState().selectedProduct.item
  if (lastProduct.id === productId) { return Promise.resolve() }
  dispatch({type: FETCH_PRODUCT_SUCCESS, product: {}})
  dispatch({type: REQUEST_PRODUCT, product: {}})
  return api
    .fetchProductById(productId)
    .then(product => dispatch(
      {
        type: FETCH_PRODUCT_SUCCESS,
        product
      }
    )
  )
}




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


// Product Actions


export const resetProduct = () => ({type: RESET_PRODUCT})

export const onStepChange = (step) => {
  return {
    type: ON_STEP_CHANGE,
    payload: step
  }
}

export const onPendantChange = (pendant) => {
  return {
    type: ON_PENDANT_CHANGE,
    payload: pendant
  }
}
export const onImageUpload = (image) => {
  return {
    type: ON_IMAGE_UPLOAD,
    payload: image
  }
}


export const onFilterChange = (filter) => {
  return {
    type: ON_FILTER_CHANGE,
    payload: filter
  }
}

export const onZoomChange = (zoom) => {
  return {
    type: ON_ZOOM_CHANGE,
    payload: zoom
  }
}


export const onCropChange = (crop) => {
  return {
    type: ON_CROP_CHANGE,
    payload: crop
  }
}

export const showCroppedImage = (croppedImage) => {
  return {
    type: SHOW_CROPPED_IMAGE,
    payload: croppedImage
  }
}

export const onCropComplete = (croppedAreaPixels) => {
  return {
    type: ON_CROP_COMPLETE,
    payload: croppedAreaPixels
  }
}

export const onTitleChange = (title) => {
  return {
    type: ON_TITLE_CHANGE,
    payload: title
  }
}

export const onDescriptionChange = (description) => {
  return {
    type: ON_DESCRIPTION_CHANGE,
    payload: description
  }
}

export const createProduct = (newProduct, userId) => {
  newProduct.user = userId
  return api
    .addProduct(newProduct)
    .then(productId => {
      return productId
    })
}

