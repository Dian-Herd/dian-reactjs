import React from 'react'
import {ListGroup, Modal, Row, Col, Card} from 'react-bootstrap'

const ModalComponent = (props) => {
    const {show, handleClose, ...data} = props
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
            <Modal.Title>Betta Fish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img src={`/Image/${data.image}`} />
                    </Card>
                </Col>
                <Col>
                    <ListGroup>
                        <ListGroup.Item>Name : {data.name}</ListGroup.Item>
                        <ListGroup.Item>Detail : <br />{data.detail}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>  
        </Modal.Body>
    </Modal>
  )
}

export default ModalComponent