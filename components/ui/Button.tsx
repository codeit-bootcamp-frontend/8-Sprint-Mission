import React from "react";
import styles from "./Button.module.scss";

type ButtonSize = "sm" | "md" | "lg";

type ButtonColor = "primary" | "secondary";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  type?: ButtonType;
  href: string;
  children: React.ReactNode;
}

export default function Button({
  className = "",
  size = "sm",
  color = "primary",
  type = "button",
  disabled = false,
  href,
  children,
  ...props
}: ButtonProps) {
  const buttonClass = `
    ${styles.btn}
    ${styles[`btn-${size}`]}
    ${styles[`btn-${color}`]} 
    ${className}
  `.trim();

  return (
    <button className={buttonClass} {...props} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
