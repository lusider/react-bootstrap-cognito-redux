import React from 'react'
import ProductApp from './ProductApp'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications'
import { Provider } from 'react-redux'
import { storeAuthUser, resetAuthState } from './backend/redux/actions'
import initStore from './backend/redux/store'

const store = initStore()


class App extends React.Component {

	componentDidMount() {
		// onAuthStateChanged(() => {
		// 	window.alert("adfasdfasdfasdf");
		// 	this.unsubscribeAuth = onAuthStateChanged(authUser => {
		// 		store.dispatch(resetAuthState())
		// 		store.dispatch(storeAuthUser(authUser))
		// 	})
		// })
		store.dispatch(resetAuthState())
		store.dispatch(storeAuthUser())
	}
	componentWillUnmount() {
		// this.unsubscribeAuth()
	}

	render () {
	    return (
		    <ToastProvider>
		      <Provider store={store}>  
		        <Router>
		          <ProductApp />
		        </Router>
		      </Provider>
		    </ToastProvider>
		);
	}
}

export default App;
