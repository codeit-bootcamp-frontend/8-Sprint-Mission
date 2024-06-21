import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";

export default function NavigationBtn({ path, btnName }) {
  return (
    <>
      <div className={styles.btnContainer}>
        <NavLink to={path}>{btnName}</NavLink>
      </div>
    </>
  );
}
