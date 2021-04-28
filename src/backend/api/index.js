import { API, graphqlOperation } from 'aws-amplify'
import { createProducts } from '../../graphql/mutations'
import { listProductss } from '../../graphql/queries'

// POSTS

export const addProduct = newProduct => {
    return API.graphql(graphqlOperation(createProducts, { newProduct }))
    .then(docRef => docRef.id)
}

// export const getUserProfile = uid =>
//     Auth.currentUserInfo()
//     .then(userData => {
//         const user = userData.user.attributes.map((doc) => ({
//             user: doc.sub
//         }))
//         return user
//     }

        // await Auth.currentUserInfo()
        // .then(user => {
        //     this.setState({
        //         userId: user.attributes.sub,
        //         username: user.username
        //     })
        // })


export const displayProducts = () => {
    return API.graphql(graphqlOperation(listProductss))
    .then(productData => {
        const products = productData.data.listProductss.items.map((doc) => ({
            id: doc.id, 
            filter: doc.filter, 
            title: doc.title, 
            pendant: doc.pendant,
            picture: doc.picture
        }))
        // const posts = postData.data.listPosts.items.map(doc => ({...doc.data}))
        return products	
    })
}
