import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

export default class Top extends React.Component{
    render(){
        return(
            <Navbar bg='light' variant='light' expand='md'>
                <Container>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Brand href='#home'>Dian</Navbar.Brand>
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto'>
                                <Nav.Link href='#home'>Home</Nav.Link>
                                <Nav.Link href='#hobbies'>Hobi</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}