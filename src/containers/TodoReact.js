import React from "react";
import ToDoContainer from "./ToDoContainer";
import { TASKS } from "../constants";

const ToDoReact = (props) => {
  return (
    <ToDoContainer
      {...props}
      title="ToDo With React (localstate)"
      tasks={TASKS}
    />
  );
};
export default ToDoReact;
