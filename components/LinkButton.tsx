import Link from "next/link";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  text: string;
  href: string;
}

function LinkButton({ href, text }: LinkButtonProps) {
  return (
    <Link className={styles.button} href={href}>
      {text}
    </Link>
  );
}

export default LinkButton;
