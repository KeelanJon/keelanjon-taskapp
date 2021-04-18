import React from "react";
import styled from "styled-components";

function PrimaryButton({ children }) {
  return <Button>{children}</Button>;
}

export default PrimaryButton;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: ${(props) => props.theme.main.primaryText};
  font-weight: 500;

  background: linear-gradient(225deg, #8743ff 0%, #4136f1 100%);
  box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
  border: none;
  border-radius: 12px;

  cursor: pointer;

  transition: 0.3s ease 0s;

  &:hover {
    transform: scale(0.95);
  }

  &:active {
    transform: scale(1);
  }
`;
