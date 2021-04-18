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
  padding: 0% 5%;
  max-width: 1440px;
  height: 100vh;
  margin: auto auto;
  overflow-y: hidden;
`;
