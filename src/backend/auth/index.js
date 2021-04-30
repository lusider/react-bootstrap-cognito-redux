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
    window.alert("adfasdfasdfasdf");
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
        console.log(user);
        return user
        
    } catch (error) {
        console.log(error);
        console.log('error signing in', error);
        return false;
    }
  }

  export const confirm = async confirmFormData => {
    const { username, confirmcode } = confirmFormData;
    console.log(confirmFormData);
    try {
      await Auth.confirmSignUp(username, confirmcode)
          .then((user) => {
                console.log(user);
              return ({...confirmFormData})
          })
    } catch(error) {
        console.log(error);
      return Promise.reject(error.message)
    }
  }

  export const register = async registerFormData => {
    const { username, email, password } = registerFormData;
    console.log(registerFormData);
    try {
    await Auth.signUp({ username, password, attributes: { email }})
        .then((user) => {
            console.log(user);
            return ({...registerFormData})
        })
    } catch(error) {
        console.log(error);
        return Promise.reject(error.message)
    }
}

export const setUserAttributes = async attributeData => {
    const { given_name, family_name, address_two, locale, state, postal_code } = attributeData;
    const user = await Auth.currentAuthenticatedUser();
    const newData = {
        given_name,
        family_name,
        address: JSON.stringify({
            street_address: attributeData.address+"\n"+address_two,
            region:state,
            locality: locale,
            postal_code,
        })
    }
    console.log("Current user", newData);
    try {
        const newUserData = await Auth.updateUserAttributes(user, newData);
        const userData = await Auth.currentAuthenticatedUser();
        return userData;
    } catch(error) {
        console.log(error);
        return Promise.reject(error.message)
    }
}