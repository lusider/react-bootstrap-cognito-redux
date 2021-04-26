import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { setUserAttributes } from '../backend/redux/actions'
import { useToasts } from 'react-toast-notifications'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



const initialFormState = { given_name: '', family_name: '', phone_number: ''
}

const UserDetails = () => {

    const [ redirect, setRedirect ] = useState(false) 
    const [formState, updateFormState] = useState(initialFormState)
    const { addToast } = useToasts()
    function onChange(e) {
        e.persist()
        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
    }

    const onAddDetail = () => {
        console.log(formState)

        setUserAttributes(formState)
			.then(
				_ => setRedirect(true),
                response => console.log(response),
				errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
			)
		}

    if (redirect) { return <Redirect to="/profile" /> }
    return (
        <Row style={{paddingTop: '80px'}}>
            <Col />
            <Col className="pt-5">
        <Form>
            <Form.Row>
                <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First name" onChange={onChange} name="given_name" />
                </Col>
                <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last name" onChange={onChange} name="family_name" />
                </Col>
            </Form.Row>
           
            <Form.Group controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control onChange={onChange} name="phone_number" placeholder="888-555-1234" />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control onChange={onChange} name="address" placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control onChange={onChange} name="address_two" placeholder="Apartment, studio, or floor" />
            </Form.Group>
            
            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={onChange} name="locale" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control onChange={onChange} name="state" as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>AL</option>
                    <option>AK</option>
                    <option>AZ</option>
                    <option>AR</option>
                    <option>CA</option>
                    <option>CO</option>
                    <option>CT</option>
                    <option>DE</option>
                    <option>DC</option>
                    <option>FL</option>
                    <option>GA</option>
                    <option>HI</option>
                    <option>ID</option>
                    <option>IL</option>
                    <option>IN</option>
                    <option>IA</option>
                    <option>KS</option>
                    <option>KY</option>
                    <option>LA</option>
                    <option>ME</option>
                    <option>MD</option>
                    <option>MA</option>
                    <option>MI</option>
                    <option>MN</option>
                    <option>MS</option>
                    <option>MO</option>
                    <option>MT</option>
                    <option>NE</option>
                    <option>NV</option>
                    <option>NH</option>
                    <option>NJ</option>
                    <option>NM</option>
                    <option>NY</option>
                    <option>NC</option>
                    <option>ND</option>
                    <option>OH</option>
                    <option>OK</option>
                    <option>OR</option>
                    <option>PA</option>
                    <option>PR</option>
                    <option>RI</option>
                    <option>SC</option>
                    <option>SD</option>
                    <option>TN</option>
                    <option>TX</option>
                    <option>UT</option>
                    <option>VT</option>
                    <option>VA</option>
                    <option>VI</option>
                    <option>WA</option>
                    <option>WV</option>
                    <option>WI</option>
                    <option>WY</option>
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control onChange={onChange} name="postal_code" />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button onClick={onAddDetail} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Col>
            <Col />
        </Row>
    )
}

export default UserDetails;
