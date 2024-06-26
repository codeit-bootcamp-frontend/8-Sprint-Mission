import LogoImage from "../../core/assets/images/logo/logo-large@3x.png";
import "./nav.css";

import TabList from "../../components/nav/TabList";
import LoginBtn from "../../components/nav/LoginBtn";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={LogoImage} className="logo-img" alt="로고" />
      <TabList onClick={() => {}} />
      <LoginBtn />
    </nav>
  );
};

export default Nav;
