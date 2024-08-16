import React from "react";
import styles from "./Article.module.scss";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

function Article() {
  return (
    <article className={styles.article}>
      <h3 className={styles["article-title"]}>
        맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
      </h3>
      <div className={styles["writer-info"]}>
        <div className={styles["profile-info"]}>
          <div className={styles["profile-wrap"]}>
            <Image
              src="/img/profile.png"
              alt="프로필 이미지"
              className={styles["profile-image"]}
              fill
            />
          </div>
          <div className={styles["nick-name"]}>총명한 판다</div>
        </div>
        <div className={styles.date}>2024. 04. 16</div>
        <div className={styles.divided}></div>
        <button className={styles["btn-favorite"]}>
          <Icon type="heart" size="md" />
          123
        </button>
      </div>
      <div className={styles["article-content"]}>
        <p>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</p>
      </div>
    </article>
  );
}

export default Article;
