import React from "react";
import Link from "next/link";
import styles from "./LinkButton.module.scss";

type ButtonSize = "sm" | "md" | "lg";

type ButtonColor = "primary" | "secondary";

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  href: string;
  children: React.ReactNode;
}

export default function LinkButton({
  className = "",
  size = "sm",
  color = "primary",
  disabled = false,
  href,
  children,
  ...props
}: LinkButtonProps) {
  const linkClass = `
    ${styles.btn}
    ${styles[`btn-${size}`]}
    ${styles[`btn-${color}`]} 
    ${className}
  `.trim();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault(); // Prevent the default action
    }
  };

  return (
    <Link href={href} legacyBehavior>
      <a
        className={linkClass}
        {...props}
        aria-disabled={disabled}
        onClick={handleClick}
      >
        {children}
      </a>
    </Link>
  );
}
