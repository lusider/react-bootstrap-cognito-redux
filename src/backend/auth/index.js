import { Auth, Hub } from 'aws-amplify'


export const getUserProfile = () =>
    Auth.currentUserInfo()
    .then(userData => {
        const user = userData.user.map((doc) => ({
            userId: doc.attributes.sub,
            username: doc.username,
            profile: doc.profile
        }))
        return user
    })



export const onAuthStateChanged = () => Hub.listen('auth', (data) => {
    const { payload } = data;
    // this.onAuthEvent(payload);
    // const user = payload.data.map((doc) => ({
    //     userId: doc.attributes.sub,
    //     username: doc.username,
    //     profile: doc.profile
    // }))
    console.log(payload)         
    return payload
})


export const logout = () => Auth.signOut()


export const login = async loginFormData => {
    try {
      await Auth.login({...loginFormData})
          .then((user) => {
              return ({...loginFormData})
          })
    } catch(error) {
      return Promise.reject(error.message)
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