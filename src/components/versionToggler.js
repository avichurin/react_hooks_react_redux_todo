import React from "react";
import Button from "../components/form/Button";

export const ReactButton = () => {
  const onClick = () => {
    window.location.assign("http://localhost:3000/todoreact");
  };

  return (
    <div>
      <Button children="ToDo With React" onClick={(e) => onClick(e)} />
    </div>
  );
};
export const ReduxButton = () => {
  const onClick = () => {
    window.location.assign("http://localhost:3000/todoredux");
  };
  return (
    <div>
      <Button children="ToDo With Redux" onClick={(e) => onClick(e)} />
    </div>
  );
};
