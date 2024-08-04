import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import NavHeader from "src/components/Header/NavHeader";

function NavbarLayout() {
  return (
    <>
      <NavHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default NavbarLayout;
