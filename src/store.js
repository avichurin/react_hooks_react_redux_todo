import { createStore, compose } from "redux";
import rootReducer from "./reducers/index";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = (preloadedState) =>
  createStore(rootReducer, preloadedState, composeEnhancers());
const store = configureStore({});
export default store;