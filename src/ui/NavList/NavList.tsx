import { useLocation, NavLink } from "react-router-dom";
import NAVIGATION_LIST from "../../utils/NAVIGATION_LIST";
import styles from "./NavLink.module.css";

export default function NavList() {
  const location = useLocation();

  const isRootPath = location.pathname === "/";

  const getLocationActive = ({ isActive, to }) => {
    const activeMenu =
      (location.pathname === "/items" || location.pathname === "/additem") &&
      (to === "items" || to === "additem");

    if (activeMenu) return styles.active;

    return isActive ? styles.active : undefined;
  };

  if (isRootPath) return null;

  return (
    <div className={styles.navList}>
      <ul>
        {NAVIGATION_LIST.map((list) => (
          <li key={list.name}>
            <NavLink
              to={list.path}
              className={({ isActive }) =>
                getLocationActive({ isActive, to: list.path })
              }
            >
              {list.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
