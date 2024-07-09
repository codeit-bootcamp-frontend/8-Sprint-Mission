import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const getLinkStyle = (navProps, pathname) => {
  const isAddItemPage = pathname === '/additem';
  return navProps.isActive || isAddItemPage ? 'nav-link active' : 'nav-link';
};

function Nav() {
  const location = useLocation();

  return (
    <ul className="nav">
      <li>
        <NavLink to="/boards" className={getLinkStyle}>
          자유게시판
        </NavLink>
      </li>
      <li>
        <NavLink to="/items" className={navProps => getLinkStyle(navProps, location.pathname)}>
          중고마켓
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
