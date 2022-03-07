import React, {useCallback, useState} from 'react'
import {Card, Button, Col} from 'react-bootstrap'
import {Link, Routes, Route} from 'react-router-dom'
import ModalComponent from './Modal/ModalComponent'


const CardComponent = (props) => {
    const {...data} = props
    const [show, setShow] = useState(false)
    const handleShow = (e)=>{
        setShow(true)
    }
    const handleClose = useCallback((e)=>{
        setShow(false)
    },[])
    return (
      <Col md={4}>
        <Card>
            <Card.Img variant="top" src={`/Image/${data.image}`} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Button as={Link} to={data.id} variant="primary" onClick={handleShow}>Detail</Button>
                <Routes>
                    <Route path={data.id} element={<ModalComponent {...data} show={show} handleClose={handleClose} />} />
                </Routes>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default CardComponent