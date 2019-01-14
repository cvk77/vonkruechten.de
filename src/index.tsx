import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import { theme } from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <GlobalStyle />
    </>
  </ThemeProvider>,

  document.getElementById("root")
);
