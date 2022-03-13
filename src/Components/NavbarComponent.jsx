import React, { Component } from 'react'
import {Navbar, Container} from 'react-bootstrap'

export default class NavbarComponent extends Component {
  render() {
    return (
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#">DN Search</Navbar.Brand>
        </Container>
    </Navbar>
    )
  }
}
