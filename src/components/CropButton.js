import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { showCroppedImage } from '../../../backend/redux/actions'
import getCroppedImg from '../../../helpers/cropImage'
import Button from 'react-bootstrap/Button'


const CropButton = (props) => {

  	const handleClick = useCallback(async () => {
	    try {
	    	const cropImage = await getCroppedImg(
	        	props.image,
	        	props.croppedAreaPixels,
	      		)
	      		props.showCroppedImage(cropImage)
	    	  	
		    } catch (e) {
	      		console.error(e)
	    }
	}, [props])

	return (
		<div>
			<Button
	          onClick={handleClick}
	          variant="secondary"
	        >
	          Crop Image
	    	</Button>
	    </div>
	)
}

const mapStateToProps = state => {
	return {
		image: state.createPendant.image,	
		croppedAreaPixels: state.createPendant.croppedAreaPixels,
		croppedImage: state.createPendant.croppedImage
	}
}

const mapDispatchToProps = dispatch => {
	return {
		showCroppedImage: croppedImage => dispatch(showCroppedImage(croppedImage))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CropButton)