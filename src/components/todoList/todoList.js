import React from "react";
import PropTypes from "prop-types";
import ToDoItem from "../todoItem/todoItem";

const ToDoList = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div>
      {todo.map((item, index) => (
        <ToDoItem
          key={index}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          isCompleted={item.isCompleted}
          value={item.value}
          id={item.id}
        />
      ))}
    </div>
  );
};

ToDoList.propTypes = {
  todo: PropTypes.array,
  removeTodo: PropTypes.func,
  completeTodo: PropTypes.func,
};
ToDoList.defaultProps = {
  todo: [],
  removeTodo: () => {},
  completeTodo: () => {},
};
export default ToDoList;
