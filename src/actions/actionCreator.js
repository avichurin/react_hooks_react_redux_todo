import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from "../constants";

export const addTodo = (value, isCompleted, id) => ({
  type: ADD_TASK,
  value,
  isCompleted,
  id,
});
export const deleteTodo = (id, isCompleted) => ({
  type: REMOVE_TASK,
  id,
  isCompleted,
});
export const readyTodo = (id) => ({
  type: COMPLETE_TASK,
  id,
});
