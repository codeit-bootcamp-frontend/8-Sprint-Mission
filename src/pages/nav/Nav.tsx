import { Link, Outlet } from "react-router-dom";
import LogoImage from "../../core/assets/images/logo/logo-large@3x.png";

import TabList from "../../components/nav/TabList";
import LoginBtn from "../../components/nav/LoginBtn";

import "./nav.css";
import { useState } from "react";

interface TabSelected {
  board: boolean;
  items: boolean;
}

const INITIAL_SELECTED = {
  board: false,
  items: false,
};

const Nav = () => {
  const [isSelected, setIsSelected] = useState<TabSelected>(INITIAL_SELECTED);
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const name =
      (e.target as HTMLUListElement).innerText === "자유게시판"
        ? "board"
        : "items";

    const newValue = { ...INITIAL_SELECTED };
    newValue[name] = true;
    setIsSelected({ ...newValue });
  };

  const handleIsSelectedReset = () => {
    setIsSelected(INITIAL_SELECTED);
  };
  return (
    <>
    <nav className="nav">
      <Link to="/" onClick={handleIsSelectedReset}>
        <img src={LogoImage} className="logo-img" alt="로고" />
      </Link>
      <TabList handleClick={handleClick} isSelected={isSelected} />
      <LoginBtn onClick={handleIsSelectedReset} />
    </nav>
      <Outlet />
    </>
  );
};

export default Nav;
