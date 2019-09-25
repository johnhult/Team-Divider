import React from "react"
import PropTypes from "prop-types"
import { InputStyled } from "./style"

const Input = ({ label, type, value, handleChange }) => {
  return (
    <InputStyled>
      {label}:
      <input
        type={type}
        value={value}
        onChange={e => handleChange(e.target.value)}
      ></input>
    </InputStyled>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

Input.defaultProps = {
  type: "text",
}

export default Input
