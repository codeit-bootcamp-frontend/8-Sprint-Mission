import Link from "next/link";
import styles from "./LinkButton.module.scss";

export default function LinkButton({
  className = "",
  size = "sm",
  color = "primary",
  disabled = false,
  href,
  children,
  ...props
}) {
  // 템플릿 리터럴을 사용하여 클래스 이름 조합
  const linkClass = `
    ${styles.btn}
    ${styles[`btn-${size}`]}
    ${styles[`btn-${color}`]}
    ${disabled ? styles["btn-disabled"] : ""}
    ${className}
  `.trim();

  return (
    <Link href={href} legacyBehavior>
      <a className={linkClass} {...props} aria-disabled={disabled}>
        {children}
      </a>
    </Link>
  );
}
