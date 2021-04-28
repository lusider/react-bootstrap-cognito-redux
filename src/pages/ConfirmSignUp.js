import React, { useState } from 'react'
import { connect } from 'react-redux'
import onlyGuests from '../components/hoc/onlyGuests'
import { Redirect } from 'react-router-dom'
import { confirm } from '../backend/redux/actions'
import { useToasts } from 'react-toast-notifications'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const initialFormState = { username: '', confirmcode: ''}

const ConfirmSignUp = props => {
    const [ redirect, setRedirect ] = useState(false)
    const [formState, updateFormState] = useState(initialFormState)
    const { addToast } = useToasts()
    function onChange(e) {
        e.persist();
        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
    }

    const onConfirm = () => {
		confirm(formState)
			.then(
				_ => setRedirect(true),
				errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
			)
		}

    if (redirect) { return <Redirect to="/Login" /> }
    return (
        <Row style={{paddingTop: '80px'}}>
            <Col />
            <Col className="pt-5">
                <Form>        
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={onChange} name="username" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirmation Code</Form.Label>
                        <Form.Control onChange={onChange} name="confirmcode" type="text" placeholder="Confirmation Code" />
                    </Form.Group>

                    <Button onClick={onConfirm} variant="dark">
                        Submit
                    </Button>
                </Form>
            </Col>
            <Col />
        </Row>
    )
}

export default onlyGuests(connect()(ConfirmSignUp));
