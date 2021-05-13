import { API, graphqlOperation } from 'aws-amplify'
import { createProduct } from '../graphql/mutations'
import { listProducts, getProduct } from '../graphql/queries'

export const addProduct = newProduct => {
    return API.graphql(graphqlOperation(createProduct, { newProduct }))
    .then(docRef => docRef.id)
  }
  
  export const fetchProductById = productId => 
      API.graphql(graphqlOperation(getProduct(productId)))
          .then(snapshot => ({id: snapshot.id, ...snapshot.data()}))
  
  export const fetchProducts = () => 
      API.graphql(graphqlOperation(listProducts))
          .then(snapshot => {
              const products = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
              return products	
          })
  
  export const fetchUserProducts = userId => 
   API.graphql(graphqlOperation(listProducts))
      .then(snapshot => {
        const products = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        return products 
      })
  