import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../form/Input";
import styled from "styled-components";
import { CloseCross, FormWrapper } from "../../style";

const ToDoInput = ({ saveTodo }) => {
  const [isVisible, setVisible] = useState(false);
  const onVisible = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [value, setValue] = useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    if (!value) return;
    saveTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleInputChange}>
      {isVisible ? (
        <FormWrapper>
          <Input
            placeholder="Enter Todo"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <CloseCross onClick={onClose} />
        </FormWrapper>
      ) : (
        <InputWrapper onClick={onVisible} style={{ cursor: "pointer" }}>
          <PlusCross />
          <AddTodo>Click to add Todos</AddTodo>
        </InputWrapper>
      )}
    </Form>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  justify-content: start;
  height: 50px;
  position: relative;
`;
const Form = styled.form`
  height: 50px;
`;
const AddTodo = styled.span`
  padding-left: 65px;
  font-size: 20px;
`;
const PlusCross = styled.div`
  position: absolute;
  top: 3px;
  left: 1px;
  cursor: pointer;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 21px;
    left: 10px;
    width: 20px;
    height: 3px;
    background: #7b7073;
  }
  &:before {
    webkit-transform: rotate(0);
    transform: rotate(0);
  }
  &:after {
    webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
`;

ToDoInput.propTypes = {
  saveTodo: PropTypes.func,
};
ToDoInput.defaultProps = {
  saveTodo: () => {},
};
export default ToDoInput;
