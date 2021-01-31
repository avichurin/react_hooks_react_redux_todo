import React from "react";
import PropTypes from "prop-types";
import Button from "../form/Button";
import styled from "styled-components";

const FILERS_BTN = [
  {
    text: "All",
    id: "all",
  },
  {
    text: "Active",
    id: "active",
  },
  {
    text: "Completed",
    id: "completed",
  },
];

const Header = ({ amount, filteredTodos }) => (
  <div>
    <span>{`${amount} Tasks left`}</span>
    <ButtonsWrapper>
      {FILERS_BTN.map(({ text, id }) => (
        <Button
          onClick={() => {
            filteredTodos(id);
          }}
          key={id}
          children={text}
        />
      ))}
    </ButtonsWrapper>
  </div>
);

const ButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0 20px 0;
`;

Header.propTypes = {
  amount: PropTypes.number,
  filteredTodos: PropTypes.func,
};
Header.defaultProps = {
  amount: 0,
  filteredTodos: () => {},
};
export default Header;
