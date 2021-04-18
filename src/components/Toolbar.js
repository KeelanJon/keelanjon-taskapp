import React from "react";
import styled from "styled-components";
import AddButton from "./buttons/AddButton";

//icon imports
import { HiHome } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

function Toolbar(props) {
  return (
    <GradientWrapper>
      <ToolContainer>
        <div>
          <HiHome />
        </div>
        <div
          onClick={function () {
            props.toggleMenu();
          }}
        >
          <AddButton />
        </div>
        <div>
          <BsFillPersonFill />
        </div>
      </ToolContainer>
    </GradientWrapper>
  );
}
export default Toolbar;

const GradientWrapper = styled.div`
  border-radius: 24px;
  padding: 1px;
  background: linear-gradient(
    142deg,
    rgba(27, 25, 25, 0.25) 0%,
    rgba(250, 250, 250, 0) 49%,
    rgba(43, 35, 35, 0.25) 100%
  );
  margin: 0.5rem 0;
  margin-bottom: 2rem;

  transition: 0.3s ease 0s;
`;

const ToolContainer = styled.div`
  background: ${(props) => props.theme.main.secondaryColor};
  color: ${(props) => props.theme.main.primaryText};
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
  border-radius: 24px;

  width: 100%;
  padding: 1rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  transition: 0.3s ease 0s;
  cursor: pointer;

  button {
    padding: 1rem;
  }
`;
