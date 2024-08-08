import { useState } from "react";
import { Article } from "@/types/article";
import formatDate from "@/lib/formatDate";
import styles from "./AllArticle.module.css";

import Image from "next/image";
import profileImage from "@/assets/images/img_profile.png";
import likeImageFull from "@/assets/images/ic_heart_full.png";
import likeImageEmpty from "@/assets/images/ic_heart_empty.png";

interface AllArticleProps {
  article: Article;
}

function AllArticle({ article }: AllArticleProps) {
  const { title, image, writer, likeCount, createdAt } = article;

  const [isLikeClicked, setIsLikeClicked] = useState<boolean>(false);

  const handleLikeButtonClick = () => {
    setIsLikeClicked(!isLikeClicked);
  };

  return (
    <article className={styles.article}>
      <h4 className={styles.title}>{title}</h4>
      <Image
        className={styles.productImage}
        src={image}
        alt="상품 이미지"
        width={72}
        height={72}
      />
      <Image
        className={styles.profileImage}
        src={profileImage}
        alt="사용자 프로필 이미지"
        width={24}
        height={24}
      />
      <h5 className={styles.nickname}>{writer.nickname}</h5>
      <h5 className={styles.createdAt}>{formatDate(createdAt)}</h5>
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
    </article>
  );
}

export default AllArticle;
