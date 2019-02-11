import { createGlobalStyle } from "styled-components/macro";
import { ThemeType } from "../../../theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    padding: 0;
  }

  html {
    background: ${props => props.theme.bgBright};
    color: ${props => props.theme.fg};
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize};
    line-height: ${props => props.theme.lineHeight};
  }
`;

export default GlobalStyle;
