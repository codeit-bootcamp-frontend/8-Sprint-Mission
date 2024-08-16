import Link from "next/link";
import styles from "./LinkButton.module.css";
import { LinkButtonProps } from "./types/ButtonType";

export default function LinkButton({
  href = "#",
  type = "button",
  btnName = "버튼",
  isActive = false,
  className = "",
}: LinkButtonProps) {
  if (href) {
    return (
      <div className={`${styles.btnContainer} ${className}`}>
        <Link className={styles.button} href={href}>
          {btnName}
        </Link>
      </div>
    );
  }

  return (
    <button
      className={`${styles.button} ${className}`}
      disabled={isActive}
      type={type}
    >
      {btnName}
    </button>
  );
}
