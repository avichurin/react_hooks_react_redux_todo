import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = ({ onChange, placeholder, value }) => {
  return (
    <InputStyled onChange={onChange} placeholder={placeholder} value={value} />
  );
};

const InputStyled = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 2px solid lightblue;
  color: black;
  padding: 0.25em 0.5em;
  font-size: 15px;
  box-sizing: border-box;
  outline: none;
  flex-basis: 85%;
`;
Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
Input.defaultProps = {
  onChange: () => {},
};
export default Input;
