import { Outlet, useLocation } from "react-router-dom";

import "./assets/styles/common.css";
import HeaderNav from "./components/reusable/HeaderNav";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import useDetectViewport from "./hooks/useDetectViewport";

function App() {
  const location = useLocation();
  const here = location.pathname;
  const sizeName = useDetectViewport();
  const [themes, setThemes] = useState({
    normalFont: {
      large: "18px",
      medium: "16px",
      small: "14px",
    },
    size: sizeName,
  });

  useEffect(() => {
    setThemes((prev) => ({
      ...prev,
      size: sizeName,
    }));
  }, [sizeName]);
  return (
    <>
      <ThemeProvider theme={themes}>
        {here !== "/auth" && <HeaderNav></HeaderNav>}
        <Outlet></Outlet>
      </ThemeProvider>
    </>
  );
}

export default App;
