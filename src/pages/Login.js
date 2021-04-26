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

const Login = ({dispatch, user}) => {
    const [ redirect, setRedirect ] = useState(false)
    const [formState, updateFormState] = useState(initialFormState)
    const { addToast } = useToasts()
    function onChange(e) {
        e.persist()
        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
    }
    React.useEffect(()=>{
        if(user.isAuthResolved){
            setRedirect(true);
        }
    }, [user])
    const onLogin = () => {
        console.log(formState)
        dispatch(login(formState))
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

                    <Button onClick={onLogin} variant="dark">
                        Submit
                    </Button>
                </Form>
            </Col>
            <Col />
        </Row>
    )
}

const mapStateToProps = () => state => {
    return {
        user: state.auth
    };
};

export default onlyGuests(connect(mapStateToProps)(Login));
