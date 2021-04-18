import React from "react";
import styled from "styled-components";
import { HiOutlinePlus } from "react-icons/hi";

function AddButton() {
  return (
    <StyledButton>
      <HiOutlinePlus />
    </StyledButton>
  );
}

export default AddButton;

const StyledButton = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;

  background: linear-gradient(
    45deg,
    rgba(65, 54, 241, 100) 0%,
    rgba(135, 67, 255, 100) 100%
  );

  filter: drop-shadow(0px 24px 48px rgba(99, 60, 247, 0.15));

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.3s ease 0s;

  &:hover {
    transform: scale(1.1);
  }
`;
