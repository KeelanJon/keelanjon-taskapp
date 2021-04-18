import React from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import { MdClose, MdDone } from "react-icons/md";

//image imports

function TaskCard(props) {
  return (
    <GradientWrapper>
      <CardContainer>
        <CardInfoWrapper>
          <CardText>
            <h3>{props.title}</h3>
            <p>{props.time}</p>
          </CardText>
        </CardInfoWrapper>

        <CardButtons>
          <button
            onClick={function () {
              {
                props.deleteFunction(props.title);
              }
            }}
          >
            <MdClose />
          </button>
          <button
            onClick={function () {
              {
                props.completeFunction(props.title);
              }
            }}
          >
            <MdDone />
          </button>
        </CardButtons>
      </CardContainer>
    </GradientWrapper>
  );
}

export default TaskCard;

const GradientWrapper = styled.div`
  border-radius: 24px;
  padding: 2px;
  background: linear-gradient(
    142deg,
    rgba(27, 25, 25, 0.25) 0%,
    rgba(250, 250, 250, 0) 49%,
    rgba(43, 35, 35, 0.25) 100%
  );
  margin: 0.5rem 0;

  transition: 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5%);
  }
`;

const CardContainer = styled.div`
  background: ${(props) => props.theme.main.secondaryColor};
  color: ${(props) => props.theme.main.primaryText};
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
  border-radius: 24px;

  width: 100%;
  padding: 1.5rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardText = styled.div`
  padding: 0;
  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.8;
  }

  p {
    font-size: 0.8rem;
    font-weight: 300;
    opacity: 0.5;
  }
`;

const CardButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: red;
    color: #fafafa;
    font-size: 1.2rem;

    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin-left: 0.5rem;

    background: linear-gradient(225deg, #8743ff 0%, #4136f1 100%);
    box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
    border: none;

    transition: 0.3s ease 0s;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(0.9);
    }
  }
`;
