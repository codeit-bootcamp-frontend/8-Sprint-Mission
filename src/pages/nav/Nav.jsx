import LogoImage from "../../core/assets/images/logo/logo-large@3x.png";
import "./nav.css";

import TabList from "../../components/nav/TabList";
import LoginBtn from "../../components/nav/LoginBtn";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={LogoImage} className="logo-img" alt="로고" />
      <TabList />
      <LoginBtn>로그인</LoginBtn>
    </nav>
  );
};

export default Nav;
