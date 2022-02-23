import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./formInput.css";

const FormInput = (props) => {
  const { label, onChange, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={()=>inputProps.name === 'confirmPassword' && setFocused(true)}
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </Form.Group>
    </div>
  );
};
export default FormInput;
