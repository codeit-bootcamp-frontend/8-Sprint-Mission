import styles from "./LikeButton.module.css";
import Image from "next/image";

export default function LikeButton({ article }) {
  return (
    <div className={styles.likeButton}>
      <Image src="/ic_heart.png" width={24} height={24} alt="좋아요 아이콘" />
      <div className={styles.likeCount}>{article.likeCount}+</div>
    </div>
  );
}
