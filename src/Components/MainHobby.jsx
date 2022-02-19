import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';

function MainHobby() {
  return (
    <Container id='hobbies'>
        <Row><h2 className='text-center mt-5 mb-4'>Hobi</h2></Row>
        <Row>
            <Col md={4}>
                <Card.Body className="text-center">
                    <Card.Title>Sepak Bola</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur temporibus, rerum soluta deleniti eveniet id. Veritatis ab voluptates nulla aliquid eveniet unde nobis quis quidem facilis praesentium</Card.Text>
                </Card.Body>
            </Col>
            <Col md={4}>
                <Card.Body className='text-center'>
                    <Card.Title>Ternak Ikan</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur temporibus, rerum soluta deleniti eveniet id. Veritatis ab voluptates nulla aliquid eveniet unde nobis quis quidem facilis praesentium</Card.Text>
                </Card.Body>
            </Col>
            <Col md={4}>
                <Card.Body  className='text-center'>
                    <Card.Title>Bermain Game Mobile</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur temporibus, rerum soluta deleniti eveniet id. Veritatis ab voluptates nulla aliquid eveniet unde nobis quis quidem facilis praesentium
                    </Card.Text>
                </Card.Body>
            </Col>
        </Row>
    </Container>
  )
}

export default MainHobby;