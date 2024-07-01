import styles from "./BestItems.module.scss";
import likeSvg from "assets/svg/like.svg";
import React from "react";
import { PageResponseType, PageType } from "custom.t";

const BestItems: React.FC<{
  data?: PageResponseType;
  isLoading?: boolean;
}> = ({ data, isLoading }) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>베스트 상품</h2>
        <ul className={styles.list}>
          {!isLoading
            ? data?.list.map(
                ({
                  id,
                  images,
                  description,
                  price,
                  favoriteCount,
                }: PageType) => (
                  <li className={styles.item} key={id}>
                    <img
                      className={styles.img}
                      src={images[0]}
                      alt="이미지를 불러올 수 없습니다."
                    />
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>{price}원</p>
                    <div className={styles.likeWrap}>
                      <img src={likeSvg} width={16} height={16} alt="" />
                      <span className={styles.likeText}>{favoriteCount}</span>
                    </div>
                  </li>
                )
              )
            : "로딩 중..."}
        </ul>
      </div>
    </section>
  );
};

export default BestItems;
