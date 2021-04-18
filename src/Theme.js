import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  main: {
    primaryColor: "#0F1116",
    secondaryColor: "#0D0D0D",
    primaryText: "#FAFAFA",
    secondaryText: "#6F7073",
    gradientBackground: ["#8743FF", "#4136F1"],
  },
  light: {
    primaryColor: "#FAFAFA",
    secondaryColor: "#FAFAFA",
    primaryText: "#0F1116",
    secondaryText: "#6F7073",
  },
  fonts: ["Poppins, sans-serif"],
  screenDimensions: {
    mobile: "720px",
    tablet: "1280px",
    desktop: "1440px",
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
