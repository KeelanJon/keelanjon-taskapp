import React from "react";
import styled from "styled-components";
import ProfileImage from "../images/profile-image.png";

function Header() {
  return (
    <Container>
      <h1>Dashboard</h1>
      <ProfileIcon image={ProfileImage} />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  padding: 2rem 5%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.2rem;
    color: ${(props) => props.theme.main.primaryText};
    font-weight: 500;
  }
`;

const ProfileIcon = styled.div`
  height: 65px;
  width: 65px;
  border-radius: 50%;

  background-image: url(${(props) => props.image});
  background-size: cover;
  padding: 0;

  cursor: pointer;
`;
