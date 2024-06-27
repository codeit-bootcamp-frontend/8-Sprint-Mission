import "./App.css";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./components/styled/theme/theme";

const GlobalStyle = createGlobalStyle`
	
`;

function App({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default App;
