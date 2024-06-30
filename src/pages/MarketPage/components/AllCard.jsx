import { NavLink } from "react-router-dom";
import "./style/AllCard.css";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692ff" : "",
    textDecoration: isActive ? "none" : "",
  };
}

function AllCard() {
  return (
    <div className="register">
      <NavLink style={getLinkStyle} to="/additem">
        상품 등록하기
      </NavLink>
    </div>
  );
}

export default AllCard;
