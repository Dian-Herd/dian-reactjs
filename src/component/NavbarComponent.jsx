import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand>DN Apps</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/bettafish">BettaFish</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavbarComponent