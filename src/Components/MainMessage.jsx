import React from 'react';
import {Card, Button, Container, Form} from 'react-bootstrap';

function MainMessage() {
  return (
    <Container className='my-5 '>
        <Card>
            <Card.Header className='text-center'>Pesan</Card.Header>
            <Form className='mt-3 mx-3'>
                <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Control as='textarea' rows={5} />
                </Form.Group>
            </Form>
            <Card.Body className='text-center'>
                <Button variant='primary'>Kirim</Button>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default MainMessage;