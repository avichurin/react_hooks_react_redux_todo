import React, { useCallback, useState } from "react";
import ToDoInput from "../components/todoInput/todoInput";
import Title from "../components/title/title";
import ToDoList from "../components/todoList/todoList";
import Header from "../components/header/header";

const ToDoContainer = ({
  title,
  //FOR REDUX
  tasks,
  addTodo,
  deleteTodo,
  isRedux,
  readyTodo,
}) => {
  const [isVisible, setVisible] = useState(false);
  const [todo, setTodo] = useState(tasks);

  const saveTodo = (value) => {
    //REACT
    const newTodos = [
      ...todo,
      { value, isCompleted: false, id: new Date().getTime() },
    ];
    setTodo(newTodos);

    //REDUX
    isRedux && addTodo(value, false, new Date().getTime());
  };

  const removeTodo = useCallback(
    //REACT
    (id, isCompleted) => {
      const newTodos = todo.filter((t) => {
        if (t.id === id && isCompleted) {
          return false;
        }
        return true;
      });
      setTodo(newTodos);

      //REDUX
      isRedux && deleteTodo(id, isCompleted);
    },
    [todo, deleteTodo, isRedux]
  );

  const completeTodo = useCallback(
    (id) => {
      //REACT
      const newTodos = todo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      setTodo(newTodos);

      //REDUX
      isRedux && readyTodo(id);
    },
    [todo, readyTodo, isRedux]
  );

  //FOR BOTH
  const onVisible = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const isTasksExist = todo && todo.length > 0;

  const getActiveTasksCounter = (todo) =>
    todo.filter((item) => !item.isCompleted).length;

  const taskCounter = getActiveTasksCounter(todo);

  const [filter, setFilter] = useState("all");

  const filteredTodos = useCallback(() => {
    let version = [];

    if (isRedux) {
      version = tasks;
    } else {
      version = todo;
    }
    if (filter === "completed") {
      return version.filter((task) => task.isCompleted);
    }
    if (filter === "active") {
      return version.filter((task) => !task.isCompleted);
    }
    return version;
  }, [filter, todo, isRedux, tasks]);

  return (
    <div>
      <Title title={title} />

      {isTasksExist && (
        <Header filteredTodos={setFilter} amount={taskCounter} />
      )}

      <ToDoInput
        saveTodo={saveTodo}
        onVisible={onVisible}
        visible={isVisible}
        onClose={onClose}
        addTodo={addTodo}
      />
      {isTasksExist && (
        <ToDoList
          todo={filteredTodos()}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      )}
    </div>
  );
};

export default ToDoContainer;
