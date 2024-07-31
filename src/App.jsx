import "./App.css";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./styles/styled/theme/theme";

function App({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default App;
