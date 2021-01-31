import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  padding: 10px;
  position: relative;
  box-sizing: border-box;
`;

const CloseCross = styled.div`
  position: absolute;
  top: 3px;
  right: 41px;
  cursor: pointer;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 21px;
    left: 10px;
    width: 22px;
    height: 3px;
    background: #7b7073;
  }
  &:before {
    webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &:after {
    webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
`;

export { FormWrapper, CloseCross };
