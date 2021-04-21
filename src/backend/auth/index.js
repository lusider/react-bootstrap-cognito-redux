import { Auth, Hub } from 'aws-amplify'


export const getUserProfile = () =>
    Auth.currentAuthenticatedUser()
    .then(userData => {
        return userData
    })
    // export const getUserProfile = uid =>
    // db.collection('profiles')
    //   .doc(uid)
    //   .get()
    //   .then(snapshot => ({uid, ...snapshot.data()}))


export const onAuthStateChanged = onAuthCallback => Hub.listen('auth', (data) => {
    const { payload } = data;
    switch (payload.event) {
        case 'signOut':
            console.log('data from event: ', data)
            break;
        case 'signIn':
            console.log('data from event:', data)      
            break
        case 'signUp':
            console.log('data from event:', data)
            break;
        case 'confirmSignUp':
            console.log('data from event:', data)
            break;
        default:
            console.log('data from event:', data)
          break;
    }
    console.log(payload.event)
    return onAuthCallback
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

  export const register = async registerFormData => {
    const { username, email, password } = registerFormData
    try {
    await Auth.signUp({ username, password, attributes: { email }})
        .then((user) => {
            return ({...registerFormData})
        })
    } catch(error) {
        return Promise.reject(error.message)
    }
}
