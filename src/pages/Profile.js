import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Profile(props) {
    
    const { given_name, family_name, address } = props.auth.user.attributes

    return (
        <Modal.Dialog style={{marginTop: '100px'}}>
        <Modal.Header closeButton>
            <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Name: {given_name} {family_name}</p>
            <div> 
              <p>{address}</p>  
            </div>
            
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
        </Modal.Footer>
        </Modal.Dialog>
    )
}
const mapStateToProps = (state)=>{
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Profile)

