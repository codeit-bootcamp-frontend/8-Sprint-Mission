import { ThemeProvider } from "styled-components";
import { theme } from "./styles/styled/theme/theme";
import { ReactNode } from "react";
import "./App.css";

function App({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default App;
