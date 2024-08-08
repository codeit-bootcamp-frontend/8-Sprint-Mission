import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  href: string;
}

function Button({ href, text }: ButtonProps) {
  return (
    <Link className={styles.button} href={href}>
      {text}
    </Link>
  );
}

export default Button;
