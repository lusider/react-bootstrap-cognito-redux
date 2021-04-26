import { Auth, Hub } from 'aws-amplify'
import { 
    // FETCH_POSTS_SUCCESS, 
    // FETCH_POST_SUCCESS,
    // REQUEST_POST,
    SET_AUTH_USER
    // RESET_AUTH_STATE,
    } from '../redux/types'

export const getUserProfile = authUser => dispatch => {
  
    if (authUser) {
  
      return Auth
        .currentAuthenticatedUser()
        .then(userWithProfile => dispatch({user: userWithProfile, type: SET_AUTH_USER}))
    } else {
        return dispatch({user: null, type: SET_AUTH_USER})
    }
  }
    // export const getUserProfile = uid =>
    // db.collection('profiles')
    //   .doc(uid)
    //   .get()
    //   .then(snapshot => ({uid, ...snapshot.data()}))


export const onAuthStateChanged = onAuthCallback => Hub.listen('auth', (data) => {
    const { payload } = data;
    
    console.log(payload.event)
    return payload
})


export const logout = () => Auth.signOut()


export const login = async loginFormData => {

    const { username, password } = loginFormData
    try {
        const user = await Auth.signIn(username, password);
        return user
        
    } catch (error) {
        console.log('error signing in', error);
    }
  }

  export const confirm = async confirmFormData => {
    try {
      await Auth.confirmSignUp({...confirmFormData})
          .then((user) => {
              return ({...confirmFormData})
          })
    } catch(error) {
      return Promise.reject(error.message)
    }
  }

  export const register = async data => {

    try {
    await Auth.signUp({ username:data.username, password: data.password, attributes: {email: data.email}})
        .then((user) => {
            return ({...data})
        })
    } catch(error) {
        return Promise.reject(error.message)
    }
}
