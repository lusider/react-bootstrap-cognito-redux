import React, { useState } from 'react'
import { connect } from 'react-redux'
import onlyGuests from '../components/hoc/onlyGuests'
import { Redirect } from 'react-router-dom'
import { register } from '../backend/redux/actions'
import { useToasts } from 'react-toast-notifications'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const initialFormState = { email: '', password: '', username: ''
}

const Register = (props) => {

    const [ redirect, setRedirect ] = useState(false)
    const [formState, updateFormState] = useState(initialFormState)
    const { addToast } = useToasts()
    function onChange(e) {
        e.persist()
        console.log(formState)
        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
    }

    const onRegister = () => {
        console.log(formState)
        register(formState)
			.then(
				_ => setRedirect(true),
				errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
			)
		}

    if (redirect) { return <Redirect to="/confirm" /> }
    return (
        <Row style={{paddingTop: '80px'}}>
            <Col />
            <Col className="pt-5">
                <Form>        
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={onChange} type="email" name="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={onChange} name="username" type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={onChange} name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={onRegister} variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
            <Col />
        </Row>
    )
}

export default onlyGuests(connect()(Register))
