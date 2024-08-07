import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";
import { LinkButtonProps } from "../@types/Button";
export default function LinkButton({
  to,
  type,
  btnName,
  isActive,
  className,
}: LinkButtonProps) {
  if (to) {
    return (
      <div className={`${styles.btnContainer} ${className}`}>
        <Link className={styles.button} to={to}>
          {btnName}
        </Link>
      </div>
    );
  }

  return (
    <>
      <button
        className={`${styles.button} ${className}`}
        disabled={isActive}
        type={type}
      >
        {btnName}
      </button>
    </>
  );
}
