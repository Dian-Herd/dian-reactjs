import React, { Component } from 'react'
import { FormControl, InputGroup, Container } from 'react-bootstrap'

export default class InputSearch extends Component {
    render() {
        const {onChange} = this.props
        return (
        <Container className = "mt-5">
            <InputGroup className="mb-3">
                <FormControl onChange={onChange} />
            </InputGroup>
        </Container>
    )
  }
}
