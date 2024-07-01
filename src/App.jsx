import { Outlet, useLocation } from "react-router-dom";

import "./assets/styles/common.css";
import HeaderNav from "./components/reusable/HeaderNav";

function App() {
  const location = useLocation();
  const here = location.pathname;

  return (
    <>
      {here !== "/auth" && <HeaderNav></HeaderNav>}
      <Outlet></Outlet>
    </>
  );
}

export default App;
