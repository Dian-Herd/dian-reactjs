import React, { Component } from 'react'
import { Card, Col, Button } from 'react-bootstrap'

export default class CardComponent extends Component {
    render() {
    const {author, title, description, urlToImage, publishedAt} = this.props
    return (
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" >{author} - {publishedAt}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </Col>
    )
  }
}
