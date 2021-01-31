import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { ReactButton, ReduxButton } from "./components/versionToggler";
import TodoRedux from "./containers/TodoRedux";
import ToDoReact from "./containers/TodoReact";

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <AppTitle>ToDo List with React, React-router and Redux</AppTitle>

        <TodoButtonsWrapper>
          <ReactButton></ReactButton>
          <ReduxButton> </ReduxButton>
        </TodoButtonsWrapper>
        <Switch>
          <Route path="/todoreact" component={ToDoReact} />
          <Route path="/todoredux" component={TodoRedux} />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  );
};
const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 550px;
  margin: 70px auto;
  font-family: Roboto, sans-serif;
  @media (max-width: 768px) {
    width: 300px;
  }
`;
const AppTitle = styled.h1`
  font-size: 1.8em;
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 1.6em;
  }
`;

const TodoButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export default App;
