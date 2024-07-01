import React from "react";
import styles from "./Guide.module.scss";
import contentImg1x1 from "assets/img/content/01/1x.png";
import contentImg2x1 from "assets/img/content/02/1x.png";
import contentImg3x1 from "assets/img/content/03/1x.png";

const Guide: React.FC = () => {
  const data = React.useMemo(
    () => [
      {
        id: 1,
        src: contentImg1x1,
        title: "Hot item",
        description: "인기 상품을 확인해 보세요",
        instructions: [
          "가장 HOT한 중고거래 물품을",
          "판다마켓에서 확인해 보세요",
        ],
      },
      {
        id: 2,
        src: contentImg2x1,
        title: "Search",
        description: "구매를 원하는 상품을 검색하세요",
        instructions: ["구매하고 싶은 물품은 검색해서", "쉽게 찾아보세요"],
      },
      {
        id: 3,
        src: contentImg3x1,
        title: "Register",
        description: "판매를 원하는 상품을 등록하세요",
        instructions: ["어떤 물건이든 판매하고 싶은 상품을", "쉽게 등록하세요"],
      },
    ],
    []
  );

  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {data.map(({ id, src, title, description, instructions }) => (
          <li className={styles.item} key={id}>
            <div>
              <img className={styles.img} src={src} alt="" />
            </div>
            <div>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
              <p className={styles.instructions}>
                {instructions.map((instruction, instructionKey) => (
                  <span key={instructionKey}>{instruction}</span>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Guide;
