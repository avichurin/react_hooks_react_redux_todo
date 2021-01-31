import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CloseCross, FormWrapper } from "../../style";

const ToDoItem = ({ isCompleted, removeTodo, completeTodo, value, id }) => {
  return (
    <FormWrapper>
      <Circle onClick={() => completeTodo(id)}>
        {isCompleted ? <Checked>✓</Checked> : null}
      </Circle>
      {isCompleted ? <Text>{value}</Text> : <span>{value}</span>}
      <CloseCross onClick={() => removeTodo(id, isCompleted)} />
    </FormWrapper>
  );
};
const Checked = styled.div`
  text-align: center;
  font-size: 25px;
  padding-left: 2px;
  color: #7b7073;
  cursor: pointer;
`;
const Circle = styled.div`
  border-radius: 5px;
  height: 22px;
  width: 22px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`;
const Text = styled.span`
  text-decoration: line-through;
`;

ToDoItem.propTypes = {
  value: PropTypes.string,
  id: PropTypes.number,
  isCompleted: PropTypes.bool,
  removeTodo: PropTypes.func,
  completeTodo: PropTypes.func,
};
ToDoItem.defaultProps = {
  value: "",
  id: null,
  isCompleted: false,
  removeTodo: () => {},
  completeTodo: () => {},
};
export default ToDoItem;
