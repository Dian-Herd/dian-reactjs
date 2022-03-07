import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

const InputSearch = ({onChange}) => {
  return (
    <InputGroup className="mb-3">
        <FormControl onChange={onChange} />
    </InputGroup>
  )
}

export default InputSearch