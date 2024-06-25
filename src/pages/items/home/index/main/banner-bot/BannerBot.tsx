import React from "react";
import styles from "./BannerBot.module.scss";
import bannerBotImgx1 from "assets/img/banner/bot/1x.png";

const BannerBot: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <ul className={styles.list}>
          <li>
            <p className={styles.description}>
              <span>믿을 수 있는</span>
              <span>판다마켓 중고거래</span>
            </p>
          </li>
          <li>
            <div className={styles.imgWrap}>
              <img className={styles.img} src={bannerBotImgx1} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BannerBot;
