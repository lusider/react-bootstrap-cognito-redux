import React from 'react'
// import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = props => {
    const { user, isAuth } = props.auth
    const { logout } = props
  	
    console.log(props.auth)

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Authentication App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Sign Out</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                { !isAuth &&
                    <>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Sign Up</Nav.Link>
                    </>
                }
                {/* { user &&
                <Nav.Link eventKey={2} href="#memes">
                    { `Welcome ${user.fullName}` }
                </Nav.Link>
                } */}
                

                    <>
                        <Nav.Link onClick={logout}>Logout</Nav.Link>
                    </>

                <Nav.Link>
                <i className="bi bi-cart"></i>

                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
