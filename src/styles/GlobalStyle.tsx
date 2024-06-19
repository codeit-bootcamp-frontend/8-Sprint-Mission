import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    font-family: 'Pretendard Variable', Pretendard, sans-serif;
  }
`;

export default GlobalStyle;
