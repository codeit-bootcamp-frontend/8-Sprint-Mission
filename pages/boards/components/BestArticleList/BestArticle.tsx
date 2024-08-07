import { useState } from "react";
import { Article } from "@/types/article";

import Image from "next/image";
import likeImageFull from "@/assets/images/ic_heart_full.png";
import likeImageEmpty from "@/assets/images/ic_heart_empty.png";
import styles from "./BestArticle.module.css";

interface BestArticleProps {
  article: Article;
}

function BestArticle({ article }: BestArticleProps) {
  const { title, image, writer, likeCount, createdAt } = article;

  const [isLikeClicked, setIsLikeClicked] = useState<boolean>(false);

  const handleLikeButtonClick = () => {
    setIsLikeClicked(!isLikeClicked);
  };

  return (
    <article>
      <h4 className={styles.title}>{title}</h4>
      <Image
        className={styles.productImage}
        src={image}
        alt="상품 이미지"
        width={72}
        height={72}
      />
      <h5 className={styles.nickname}>{writer.nickname}</h5>
      <div className={styles.like}>
        <button onClick={handleLikeButtonClick}>
          <Image
            className={styles.likeImage}
            src={isLikeClicked ? likeImageFull : likeImageEmpty}
            alt="좋아요 아이콘"
            width={24}
            height={24}
          />
        </button>
        <h5 className={styles.likeCount}>{likeCount}</h5>
      </div>
      <h5 className={styles.createdAt}>{createdAt}</h5>
    </article>
  );
}

export default BestArticle;
