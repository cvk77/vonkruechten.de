import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import { App, GlobalStyle } from "./components/_meta";
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
