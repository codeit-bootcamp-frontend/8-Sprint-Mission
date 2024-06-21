import React from "react";
import styles from "./Guide.module.scss";
import contentImg1x1 from "assets/img/content/01/1x.png";
import contentImg2x1 from "assets/img/content/02/1x.png";
import contentImg3x1 from "assets/img/content/03/1x.png";

const Guide: React.FC = () => {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div>
            <img className={styles.img} src={contentImg1x1} alt="" />
          </div>
          <div>
            <p className={styles.title}>Hot item</p>
            <p className={styles.description}>인기 상품을 확인해 보세요</p>
            <p className={styles.instructions}>
              <span>가장 HOT한 중고거래 물품을</span>
              <span>판다마켓에서 확인해 보세요</span>
            </p>
          </div>
        </li>

        <li className={styles.item}>
          <div>
            <img className={styles.img} src={contentImg2x1} alt="" />
          </div>
          <div className={styles.rtl}>
            <p className={styles.title}>Search</p>
            <p className={styles.description}>
              구매를 원하는 상품을 검색하세요
            </p>
            <p className={styles.instructions}>
              <span>구매하고 싶은 물품은 검색해서</span>
              <span>쉽게 찾아보세요</span>
            </p>
          </div>
        </li>

        <li className={styles.item}>
          <div>
            <img className={styles.img} src={contentImg3x1} alt="" />
          </div>
          <div>
            <p className={styles.title}>Register</p>
            <p className={styles.description}>
              판매를 원하는 상품을 등록하세요
            </p>
            <p className={styles.instructions}>
              <span>어떤 물건이든 판매하고 싶은 상품을</span>
              <span>쉽게 등록하세요</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Guide;
