import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";

interface LinkButtonProps {
  path: string;
  btnName: string;
  className?: string;
}

export default function LinkButton({
  path,
  btnName,
  className,
}: LinkButtonProps) {
  return (
    <>
      <div className={`${styles.btnContainer} ${className}`}>
        <NavLink to={path}>{btnName}</NavLink>
      </div>
    </>
  );
}
