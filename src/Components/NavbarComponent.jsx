import React from 'react'
import {Navbar, Container} from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#">DN Search</Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default NavbarComponent