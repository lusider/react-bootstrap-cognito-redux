export const backToUpload = (image) => {
    props.uploadImage(image = 'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000')
}

export const backToCrop = (croppedImage) => {
    props.showCroppedImage(croppedImage = '')
}

export	const productCreate = (props) => {
    const { user } = auth

    
    createProduct(product, user.uid)
        .then(
            errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
        )
        
}


	
export const handleHiddenClick = event => hiddenFileInput.current.click()

export function handleUpload(event) {
    props.uploadImage(URL.createObjectURL(event.target.files[0], { type: 'image/jpeg' }))
}