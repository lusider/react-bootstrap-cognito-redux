import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = props => {
    const { isAuthResolved } = props.auth
    
    const { logout } = props
  	

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link style={{color: '#fff'}} to="/">Cosmic Arts</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                
                </Nav>
                <Nav>
                { !isAuthResolved &&
                    <>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Sign Up</Nav.Link>
                    </>
                }
                {/* { user &&
                <Nav.Link eventKey={2} href="#memes">
                    { `Welcome ${user.name}` }
                </Nav.Link>
                } */}
                

                   { isAuthResolved && <>
                    <NavDropdown style={{marginRight: '40px'}} title={props?.auth?.user?.username} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item><Link style={{color: '#212529'}} to="/user-details">Details</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link style={{color: '#212529'}} to="/profile">Profile</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>Sign Out</NavDropdown.Item>
                </NavDropdown>
                    </>}

                <Nav.Link>
                <i className="bi bi-cart"></i>

                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
