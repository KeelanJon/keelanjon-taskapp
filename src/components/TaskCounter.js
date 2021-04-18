import React from "react";
import styled from "styled-components";

function TaskCounter(props) {
  return (
    <Container>
      <CounterCard>
        <h4>{props.overview}</h4>
        <h3>Overview</h3>
      </CounterCard>
      <CounterCard>
        <h4>{props.projects}</h4>
        <h3>Projects</h3>
      </CounterCard>
      <CounterCard>
        <h4>{props.complete}</h4>
        <h3>Complete</h3>
      </CounterCard>
    </Container>
  );
}

export default TaskCounter;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;
`;
const CounterCard = styled.div`
  text-align: center;
  padding: 0.5rem;
  padding-right: 1.5rem;

  h3 {
    color: ${(props) => props.theme.main.primaryText};
    font-weight: 300;
    font-size: 1rem;
    opacity: 0.5;
  }

  h4 {
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.theme.main.primaryText};
  }
`;
