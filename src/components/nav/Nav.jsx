import LogoImage from "../../core/assets/images/logo/logo-large@3x.png";
import "./nav.css";

import BtnSmall from "../../core/buttons/BtnSmall";
import TabList from "./TabList";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={LogoImage} className="logo-img" alt="로고" />
      <TabList />
      <BtnSmall>로그인</BtnSmall>
    </nav>
  );
};

export default Nav;
