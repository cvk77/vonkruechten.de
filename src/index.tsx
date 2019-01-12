import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  html {
    background: white;
    color: black;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: "Source Sans Pro";
    font-size: 12pt;
    line-height: 1.5em;
  }
`;

ReactDOM.render(
  <React.Fragment>
    <App />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById("root")
);
