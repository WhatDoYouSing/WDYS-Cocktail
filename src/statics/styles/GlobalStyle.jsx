import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: Hahmlet;
    font-family: AppleSDGothicNeo;
    line-height: normal;
    background: #EDE5D9;
  }

  button {
    border: none;
    outline: none;
  }

  a {
    text-decoration-line: none;
  }
`;

export default GlobalStyles;
