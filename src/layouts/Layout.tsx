import { Outlet } from "react-router-dom";
import HeaderBasic from "src/components/Header/HeaderBasic";
import MediaProvider from "src/contexts/MediaContext";

function Layout() {
  return (
    <MediaProvider>
      <HeaderBasic />
      <Outlet />
    </MediaProvider>
  );
}

export default Layout;
