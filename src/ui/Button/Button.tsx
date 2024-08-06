import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  type?: ButtonType;
  btnName: ReactNode;
  isActive: boolean;
  variant?: string | boolean;
}

export default function Button({
  type,
  btnName,
  isActive,
  variant,
}: ButtonProps) {
  const variantCheck = variant && styles.commentForm;

  return (
    <>
      <button
        className={`${styles.button} ${variantCheck}`}
        disabled={isActive}
        type={type}
      >
        {btnName}
      </button>
    </>
  );
}
