import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { PropsWithChildren } from "react";

function App({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default App;
