import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  * {
    font-family: Pretendard, sans-serif;
  }

  html {
    font-family: Pretendard, sans-serif;
  }

  button,
  a {
    border: none;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;
