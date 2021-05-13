import React from 'react'
import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button'
import { onImageUpload } from '../backend/redux/actions'


const UploadCard = (props) => {
    const hiddenFileInput = React.useRef(null)
            
    const handleHiddenClick = event => hiddenFileInput.current.click()

    const handleUpload = (event) => {
        props.onImageUpload(URL.createObjectURL(event.target.files[0], { type: 'image/jpeg' }))
    }


    return (

                <Card style={{ margin: '0 auto', float: 'none', width: '18rem' }}>
                <Card.Img style={{maxHeight: '150px'}} variant="top" src={props.image} />
                <Card.Body  style={{ height: '230px'}}>
                <Card.Title>Upload Image</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <input 
                    type="file" 
                    onChange={handleUpload} 
                    style={{display: 'none'}} 
                    ref={hiddenFileInput} 
                    />

                </Card.Body>
                <Card.Footer>
                <Button onClick={handleHiddenClick} variant="secondary">Upload Image</Button>
                </Card.Footer>
            </Card>



        //     <>
        //         <Row style={{justifyContent: 'center', height: '150px'}}><img alt="pendant" style={{width: 'auto', height: '120px'}} src={props.image} /></Row> 
        //         <Row>
        //             <h5>Upload Image</h5>
        //         </Row>
        //         <Row style={{height: '50px', marginBottom: '30px'}}>
        //             <p>
        //             For Best Results Use Larger Image
        //             (160x160px minimum)
        //             </p>
        //         </Row>
        //         <Row>
        //             <input 
        //             type="file" 
        //             onChange={handleUpload} 
        //             style={{display: 'none'}} 
        //             ref={hiddenFileInput} 
        //             />
        //         </Row>
        //         <Button onClick={handleHiddenClick} variant="secondary">Upload Image</Button>
        // </>
    )
}

const mapStateToProps = state => {
	return {
		image: state.createPendant.image
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onImageUpload: image => dispatch(onImageUpload(image))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadCard)

