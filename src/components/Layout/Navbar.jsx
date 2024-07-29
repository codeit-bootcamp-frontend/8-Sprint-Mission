import logoImg from "../../assets/logo.svg";
import "./Navbar.css";
import "../../style/global.css";
import { Link, NavLink, useLocation } from "react-router-dom";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692FF" : "#4B5563",
    textDecoration: "none",
  };
}

function Navbar() {
  const location = useLocation();
  const isActive =
    location.pathname === "/additem" || location.pathname === "/items";

  return (
    <header>
      <Link to="/">
        <img className="logo" src={logoImg} alt="logo" />
      </Link>
      <div className="menu">
        <div className="menu-borad">자유게시판</div>
        <div className="menu-market">
          <NavLink style={getLinkStyle({ isActive })} to="/items">
            중고마켓
          </NavLink>
        </div>
      </div>
      <div className="login">로그인</div>
    </header>
  );
}

export default Navbar;
