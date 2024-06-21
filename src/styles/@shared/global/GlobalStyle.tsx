import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    /* 웹 접근성을 고려, 브라우저의 기본 폰트 사이즈에 맞춰 폰트 배율이 반영되도록 설정 */
    /* 브라우저의 기본 폰트사이즈는 16px, 10px로 만들어 직관적인 rem 사용을 위해 이를 62.5%만큼 축소 */
    /* 10px = 1.0rem */
    font-size: 62.5%;
  }

  * {
    font-family: 'Pretendard Variable', Pretendard, sans-serif;
    box-sizing: border-box;
  }

  body{
    height: 100vh;
    width: 100vw;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    outline: none;
    border: none;
  }
`;

export default GlobalStyle;
