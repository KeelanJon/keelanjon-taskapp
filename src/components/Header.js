import React from "react";
import styled from "styled-components";
import ProfileImage from "../images/profile-image.png";
import { Row } from "react-bootstrap";

function Header() {
  return <StyledHeader>Todays Tasks</StyledHeader>;
}

export default Header;

const StyledHeader = styled.h1`
  font-size: 1.2rem;
  padding: 2rem 0;
`;
