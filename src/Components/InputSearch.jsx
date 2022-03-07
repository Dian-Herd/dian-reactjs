import React, { Component } from 'react'
import { InputGroup, FormControl, Container, Col, Row } from 'react-bootstrap'

export default class InputSearch extends Component {
  render() {
    return (
      <Container className="mt-5">
          <Row>
              <Col md={4}>
                <InputGroup>
                    <FormControl placeholder="Search News" onChange={this.props.onChange} />
                </InputGroup>
              </Col>
          </Row>
      </Container>
    )
  }
}
