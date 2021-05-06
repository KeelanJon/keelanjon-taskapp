import React from "react";
import styled from "styled-components";
import Theme from "../Theme";
import GlobalStyle from "../GlobalStyles";

function Layout({ children }) {
  return (
    <Theme>
      <GlobalStyle />
      <Container>{children}</Container>;
    </Theme>
  );
}

export default Layout;

const Container = styled.div`
  position: relative;

  background: ${(props) => props.theme.main.primaryColor};
  padding: 2rem;
  max-width: 580px;

  margin: auto auto;
`;
