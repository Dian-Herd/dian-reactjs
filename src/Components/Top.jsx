import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

export default class Top extends React.Component{
    render(){
        return(
            <Navbar bg='primary' variant='dark' expand='md'>
                <Container>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Brand href='#home'>DN App</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}