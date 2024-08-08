import { useState } from "react";
import { Article } from "@/types/article";
import formatDate from "@/lib/formatDate";
import styles from "./BestArticle.module.css";

import Image from "next/image";
import bestBadge from "@/assets/images/img_best_badge.png";
import likeIconFull from "@/assets/images/ic_heart_full.png";
import likeIconEmpty from "@/assets/images/ic_heart_empty.png";

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
    <article className={styles.articleWrapper}>
      <Image
        className={styles.bestBadgeImage}
        src={bestBadge}
        alt="베스트 배지"
        width={102}
      />
      <div className={styles.articleHeader}>
        <h4 className={styles.title}>{title}</h4>
        <Image
          className={styles.productImage}
          src={image}
          alt="상품 이미지"
          width={72}
          height={72}
        />
      </div>
      <div className={styles.articleDetails}>
        <div className={styles.writerInfo}>
          <h5 className={styles.nickname}>{writer.nickname}</h5>
          <div className={styles.likeWrapper}>
            <button onClick={handleLikeButtonClick}>
              <Image
                className={styles.likeIcon}
                src={isLikeClicked ? likeIconFull : likeIconEmpty}
                alt="좋아요 아이콘"
                width={16}
                height={16}
              />
            </button>
            <h5 className={styles.likeCount}>{likeCount}</h5>
          </div>
        </div>
        <h5 className={styles.createdAt}>{formatDate(createdAt)}</h5>
      </div>
    </article>
  );
}

export default BestArticle;
