import Link from "next/link";
import styles from "./ReturnButton.module.css";

import Image from "next/image";
import goBackIcon from "@/assets/images/ic_back.png";

interface ReturnButtonProps {
  text: string;
}

function ReturnButton({ text }: ReturnButtonProps) {
  return (
    // onClick 처리 함수 필요
    <button className={styles.button}>
      {text}
      <Image src={goBackIcon} alt="되돌아가기 아이콘" width={24} height={24} />
    </button>
  );
}

export default ReturnButton;
