import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import {
    onCropComplete,
    onCropChange,
    onZoomChange,
	onFilterChange,
    showCroppedImage
   } from '../backend/redux/actions'
import Zoom from './Zoom'
import getCroppedImg from '../helpers/cropImage'
import Cropper from 'react-easy-crop'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Filter from './Filter'
import Form from 'react-bootstrap/Form'

const CropCard = (props) => {

	const handleCrop = useCallback(async () => {
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

	const handleZoomChange = (zoom) => {
    	props.onZoomChange(zoom)
  	}
  	const handleCropChange = (crop) => {
  		props.onCropChange(crop)
  	}
  	const handleCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
  		props.onCropComplete(croppedAreaPixels)
  	}, [props])

	const cropStyle = {
  		height: '150px',
		width: '150px'
	}
	const media = {}

	const container = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'relative',
		height: '150px',
		width: 'auto',
		borderTopLeftRadius: 'calc(.25 rem - 1px)',
        borderTopRightRadius: 'calc(.25 rem - 1px)'
	}
    return (
		<Card style={{ margin: '0 auto', float: 'none', width: '18rem' }}>
		<Cropper 
			style={{ containerStyle: container, mediaStyle: media, cropAreaStyle: cropStyle }}
			image={props.image}
			crop={props.crop}
			zoom={props.zoom}
			aspect={1}
			onCropChange={handleCropChange}
			onCropComplete={handleCropComplete}
			onZoomChange={handleZoomChange}
			cropShape="round"
			showGrid={false}
		/>
		<Card.Body style={{ height: '230px'}}>
			<Card.Title>Customize Pendant</Card.Title>
			<Card.Text>
			Adjust zoom and image to fit inside the pendant to your liking.
			</Card.Text>
			{ !props.croppedImage ? 
			<Zoom /> :
			<>
			<Filter />
			<Form>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline value='0' label="Brass Finish" type={type} id={`inline-${type}-1`} />
                <Form.Check inline value='1' label="Nickle Finish" type={type} id={`inline-${type}-2`} />
                </div>
            ))}
            </Form>
			</>
			}
			</Card.Body>
		<Card.Footer><Button onClick={handleCrop} variant="secondary">Crop Image</Button></Card.Footer>
		</Card>

    )
}

const mapStateToProps = state => {
	return {
		image: state.createPendant.image,
		zoom: state.createPendant.zoom,
		crop: state.createPendant.crop,
		croppedAreaPixels: state.createPendant.croppedAreaPixels,
		croppedImage: state.createPendant.croppedImage,
		filter: state.createPendant.filter
	}
}

const mapDispatchToProps = dispatch => {
	return {
		showCroppedImage: croppedImage => dispatch(showCroppedImage(croppedImage)),
		onFilterChange: filter => dispatch(onFilterChange(filter)),
		onZoomChange: zoom => dispatch(onZoomChange(zoom)),
		onCropChange: crop => dispatch(onCropChange(crop)),
		onCropComplete: croppedAreaPixels => dispatch(onCropComplete(croppedAreaPixels)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CropCard)

