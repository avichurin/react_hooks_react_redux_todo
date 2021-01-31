import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, TASKS } from "../constants";

const tasks = (state = TASKS, { value, isCompleted, id, type }) => {
  switch (type) {
    case ADD_TASK:
      return [...state, { value, isCompleted, id }];
    case REMOVE_TASK:
      return [...state].filter((task) => task.id !== id);
    case COMPLETE_TASK:
      return [...state].map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    default:
      return state;
  }
};
export default tasks;
