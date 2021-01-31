import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Title = ({ title }) => <TodoTitle>{title}</TodoTitle>;

const TodoTitle = styled.h2`
  font-size: 1.4em;
  text-align: center;
`;

Title.propTypes = {
  title: PropTypes.string,
};
Title.defaultProps = {
  title: "Some title",
};
export default Title;
