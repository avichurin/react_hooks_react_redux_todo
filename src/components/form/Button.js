import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #d3d3dc;
  color: #7b7073;
  padding: 0.25em 1em;
  font-size: 15px;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  &:focus {
    border: 2px solid lightblue;
  }
`;

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  onClick: () => {},
};
export default Button;
