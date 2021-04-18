import React from "react";
import styled from "styled-components";

function WelcomeMsg() {
  //   const time = new Date.getFullDate();
  //   console.log(time);

  const name = "John Doe";
  const TimeOfDay = "Good Morning";

  return (
    <Container>
      <p>{TimeOfDay},</p> <p>{name}</p>
    </Container>
  );
}

export default WelcomeMsg;

const Container = styled.div`
  padding: 1rem 0;

  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.main.primaryText};
`;
