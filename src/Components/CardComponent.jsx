import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const CardComponent = (props) => {
    const {author, title, description, urlToImage, publishedAt} = props
  return (
    <Col md={4}>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{author} - {publishedAt}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Col>
  )
}

export default CardComponent