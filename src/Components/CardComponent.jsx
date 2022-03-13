import React, { Component } from 'react'
import { Button, Card, Col } from 'react-bootstrap'

export default class CardComponent extends Component {
  render() {
      const {urlToImage, title, publishedAt, author, description} = this.props
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
}
