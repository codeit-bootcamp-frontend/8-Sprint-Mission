import React from "react";
import styles from "./BannerTop.module.scss";
import bannerTopImgx1 from "assets/img/banner/top/1x.png";

const BannerTop: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <ul className={styles.list}>
          <li>
            <div>
              <h1 className={styles.description}>
                <p>일상의 모든 물건을 거래해 보세요</p>
              </h1>
              <button className={`${styles.seeMore} primary`}>
                구경하러 가기
              </button>
            </div>
          </li>
          <li>
            <div className={styles.imgWrap}>
              <img className={styles.img} src={bannerTopImgx1} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BannerTop;
