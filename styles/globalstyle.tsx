import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
    margin: 0;
    font-family: 'Noto Sans', 'Noto Sans KR';
    width: 100%;
    align-items: center; 
    }

    #__next {
    padding: 94px 360px;
    width: 100%;
    @media (max-width: 744px) {
        padding: 94px 24px;
    }
    }

    a {
  
    }

    * {
    box-sizing: border-box;
    }

`;

export default GlobalStyle;
