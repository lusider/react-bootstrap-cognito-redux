import React from 'react'

import ImageFilter from 'react-image-filter';
import Button from 'react-bootstrap/Button'
import { onPendantChange, showCroppedImage } from '../backend/redux/actions'
import { connect } from 'react-redux'
import Cropper from 'react-easy-crop'
import goldPendant from '../images/goldPendant.png'
import silverPendant from '../images/silverPendant.png'
import Card from 'react-bootstrap/Card'


const Preview = props => {
    const pendantSelection = [ goldPendant, silverPendant ]
    const cropStyle = {
        height: 150,
        width: 150
    }
    const media = {}

    const container = {
        position: 'relative',
        height: 120,
        width: 208,		
    }
    const preview = {
        display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
        height: '150px',
        paddingTop: '35px'
    }
    const blankFilter = [ null ]

	const blueShade = [
	    1, 0, 0, 0, 0,
	    0, 1, 0.7, 0, 0,
	    0, 0, 1, 0.7, 0,
	    0, 0, 0, 1, 0,
	]

	const oldShade = [
	    0.3, 1.3, 0.1, 0, 0,
	    0.6, 0.45, 0.1, 0, 0,
	    0.1, -0.7, 0.1, 0, 0,
	    0, 0.8, 0, 1, 0,
	]

	const imageFilters = [ blankFilter, blueShade, oldShade, 'sepia', 'grayscale' ]
    const handleCropChange = () => {
        return
    }
    const handleCropComplete = () => {
        return
    }
    const handleZoomChange = () => {
        return
    }

    return (
        <Card style={{ margin: '0 auto', float: 'none', width: '18rem' }}>
            <div style={preview}>
                
                { !props.croppedImage &&
                <> 
                <img alt="pendant selection" style={{ zIndex: 1, position: 'absolute', marginTop: '-21px'}} src={pendantSelection[props.pendant]} />
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
                </>
                }
                { props.croppedImage &&
                <>
                <img alt="pendant selection" style={{ zIndex: 1, position: 'absolute', marginTop: '-21px'}} src={pendantSelection[props.pendant]} /> 
                <ImageFilter style={{width: 109, height: 109, marginTop: 5.5, marginLeft: .915}}
					        image={props.croppedImage}
					        filter={ imageFilters[props.filter] }
					    />
                </>
                }
            </div>
        <Card.Body style={{ height: '230px'}}>
            <Card.Title>Preview Pendant</Card.Title>
            <Card.Text>
            Preview and customize your pendant.
            </Card.Text>

            
            
        </Card.Body>
        <Card.Footer><Button variant="secondary">Finalize Pendant</Button></Card.Footer>
        </Card>
        
        
        
        
        
        // <>
        //     <Row>
        //         { !props.croppedImage && 
        //         <Cropper 
        //             style={{ containerStyle: container, mediaStyle: media, cropAreaStyle: cropStyle }}
        //             image={props.image}
        //             crop={props.crop}
        //             zoom={props.zoom}
        //             aspect={1}
        //             onCropChange={handleCropChange}
        //             onCropComplete={handleCropComplete}
        //             onZoomChange={handleZoomChange}
        //             cropShape="round"
        //             showGrid={false}
        //         />
        //         }
        //         { props.croppedImage && 
        //         <img style={{width: 'auto', height: '108px'}} src={props.croppedImage} alt="cropped" />
        //         }
                
        //     </Row>
        //     <Row><h5>Preview Product</h5></Row>
        //     <Row><p>Adjust filter</p></Row>
        //     <Button />
        // </>
    )
}

const mapStateToProps = state => {
	return {
		croppedImage: state.createPendant.croppedImage,
        image: state.createPendant.image,
        zoom: state.createPendant.zoom,
        crop: state.createPendant.crop,
        pendant: state.createPendant.pendant,
        filter: state.createPendant.filter
	}
}

const mapDispatchToProps = dispatch => {
	return {
		showCroppedImage: croppedImage => dispatch(showCroppedImage(croppedImage)),
        onPendantChange: pendant => dispatch(onPendantChange(pendant))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Preview)
