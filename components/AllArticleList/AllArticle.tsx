import { useState } from "react";
import Link from "next/link";
import { Article } from "@/types/article";
import formatDate from "@/lib/formatDate";
import styles from "./AllArticle.module.css";

import Image from "next/image";
import profileImage from "@/assets/images/img_profile.png";
import likeIconFull from "@/assets/images/ic_heart_full.png";
import likeIconEmpty from "@/assets/images/ic_heart_empty.png";

interface AllArticleProps {
  article: Article;
}

function AllArticle({ article }: AllArticleProps) {
  const { id, title, image, writer, likeCount, createdAt } = article;

  const [isLikeClicked, setIsLikeClicked] = useState<boolean>(false);

  const handleLikeButtonClick = () => {
    setIsLikeClicked((prevIsLikeClicked) => !prevIsLikeClicked);
  };

  return (
    <Link className={styles.article} href={`/board/${id}`}>
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
      <div className={styles.articleFooter}>
        <div className={styles.writerInfo}>
          <Image
            className={styles.profileImage}
            src={profileImage}
            alt="사용자 프로필 이미지"
            width={24}
            height={24}
          />
          <h5 className={styles.nickname}>{writer.nickname}</h5>
          <h5 className={styles.createdAt}>{formatDate(createdAt)}</h5>
        </div>
        <div className={styles.likeWrapper}>
          <button onClick={handleLikeButtonClick}>
            <Image
              className={styles.likeIcon}
              src={isLikeClicked ? likeIconFull : likeIconEmpty}
              alt="좋아요 아이콘"
              width={24}
              height={24}
            />
          </button>
          <h5 className={styles.likeCount}>{likeCount}</h5>
        </div>
      </div>
    </Link>
  );
}

export default AllArticle;
