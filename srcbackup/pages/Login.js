import React, { useState } from 'react'
import { connect } from 'react-redux'
import onlyGuests from '../components/hoc/onlyGuests'
import { Redirect } from 'react-router-dom'
import { login } from '../backend/redux/actions'
import { useToasts } from 'react-toast-notifications'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const initialFormState = { username: '', password: ''
}

const Login = (props) => {
    const [ redirect, setRedirect ] = useState(false)
    const [formState, updateFormState] = useState(initialFormState)
    const { addToast } = useToasts()
    function onChange(e) {
        e.persist()
        console.log(formState)
        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
    }

    const onLogin = () => {
        console.log(formState)
        login(formState)
			.then(
				_ => setRedirect(true),
				errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
			)
		}

    if (redirect) { return <Redirect to="/" /> }
    return (
        <Row style={{paddingTop: '80px'}}>
            <Col />
            <Col className="pt-5">
                <Form>        
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="username" onChange={onChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" onChange={onChange} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button onClick={onLogin} variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
            <Col />
        </Row>
    )
}

export default onlyGuests(connect()(Login));
