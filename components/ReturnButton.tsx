import Link from "next/link";
import styles from "./ReturnButton.module.css";

import Image from "next/image";
import goBackIcon from "@/assets/images/ic_back.png";

interface ReturnButtonProps {
  href: string;
  text: string;
}

function ReturnButton({ href, text }: ReturnButtonProps) {
  return (
    <div className={styles.buttonWrapper}>
      <Link className={styles.button} href={href}>
        {text}
        <Image
          src={goBackIcon}
          alt="되돌아가기 아이콘"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
}

export default ReturnButton;
