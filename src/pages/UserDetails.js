import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { setUserAttributes } from '../backend/redux/actions'
import { useToasts } from 'react-toast-notifications'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import onlyGuests from '../components/hoc/onlyGuests'


// const initialFormState = { given_name: '', family_name: '', phone_number: ''
// }

const UserDetails = ({dispatch, user}) => {
    const userAttributes = user?.user?.attributes;
    const addressData = user?.user?.attributes?.address?JSON.parse(userAttributes.address):[];
    const addressOne = addressData?.street_address?.split('\n')[0]==='undefined'?"":user?.user?.attributes?.address?addressData?.street_address?.split('\n')[0]:'';
    const addressTwo = addressData?.street_address?.split('\n')[1]==='undefined'?"":user?.user?.attributes?.address?addressData?.street_address?.split('\n')[1]:'';
    const [ redirect, setRedirect ] = useState(false) 
    const [formState, updateFormState] = useState();

    const { addToast } = useToasts()
    function onChange(e) {
        e.persist()
        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
    }
    useEffect(() => {
        console.log(addressTwo)
        updateFormState({
            given_name:userAttributes?.given_name,
            family_name:userAttributes?.family_name,
            address:addressOne?addressOne:'',
            address_two:addressTwo?addressTwo:'',
            locale:addressData?.locality,
            state:addressData?.region,
            postal_code:addressData?.postal_code,
        })
    },[addressTwo, addressOne])
    const onAddDetail = () => {
        console.log("formdata", formState)

        const attributes = setUserAttributes(formState);
        dispatch(attributes);
        setRedirect(true);
			// .then(
			// 	_ => setRedirect(true),
            //     response => console.log(response),
			// 	errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
			// )
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
                <Form.Control value={formState?.given_name} disabled={userAttributes?.given_name?true:false} onChange={onChange} name="given_name" />
                </Col>
                <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control value={formState?.family_name} disabled={userAttributes?.family_name?true:false} onChange={onChange} name="family_name" />
                </Col>
            </Form.Row>
           
            {/* <Form.Group controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control onChange={onChange} name="phone_number" value={userAttributes?.phone_number} />
            </Form.Group> */}
            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control onChange={onChange} name="address" value={formState?.address} disabled={addressOne!==''?true:false} />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control onChange={onChange} name="address_two" value={formState?.address_two} disabled={addressTwo!==''?true:false} />
            </Form.Group>
            
            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={onChange} name="locale" value={formState?.locale} disabled={addressData?.locality?true:false}  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control onChange={onChange} name="state" as="select" value={formState?.state} disabled={addressData?.region?true:false} >
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
                <Form.Control onChange={onChange} name="postal_code" value={formState?.postal_code} disabled={addressData?.postal_code?true:false}  />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button onClick={onAddDetail} variant="primary">
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

export default onlyGuests(connect(mapStateToProps)(UserDetails));
