import { NavLink } from 'react-router-dom';

function getLinkStyle({ isActive }) {
  return isActive ? 'nav-link active' : 'nav-link';
}
function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink to="/boards" className={getLinkStyle}>
          자유게시판
        </NavLink>
      </li>
      <li>
        <NavLink to="/items" className={getLinkStyle}>
          중고마켓
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
