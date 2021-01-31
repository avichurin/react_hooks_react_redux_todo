import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, readyTodo } from "../actions/actionCreator";

import ToDoContainer from "./ToDoContainer";

const ToDoRedux = (props) => {
  return (
    <ToDoContainer
      {...props}
      title="ToDo With React-Redux"
      tasks={props.tasks}
      addTodo={props.addTodo}
      deleteTodo={props.deleteTodo}
      isRedux={true}
      readyTodo={props.readyTodo}
    />
  );
};
export default connect(
  ({ tasks }) => ({
    tasks,
  }),
  { addTodo, deleteTodo, readyTodo }
)(ToDoRedux);
