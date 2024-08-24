import styles from "./LandingPage.module.css";
import Section from "../../ui/Section/Section";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import hotItemImg from "../../assets/images/hot_item.png";
import searchItemImg from "../../assets/images/search_item.png";
import registerItemImg from "../../assets/images/register_item.png";

export default function LandingPage() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <Section>
          <div className={styles.banner}>
            <div className={styles.bannerTitle}>
              <h1 className={styles.title}>
                일상의 모든 물건을
                <br />
                거래해 보세요
              </h1>
              <Link to="/items" className={styles.visitBtn}>
                구경하러 가기
              </Link>
            </div>
          </div>
        </Section>
      </div>
      <div className={styles.contents}>
        <Section>
          <div className={styles.wrapper}>
            <div className={styles.itemList}>
              <img src={hotItemImg} alt="인기 상품" />
              <div className={styles.info}>
                <span className={styles.topLine}>Hot item</span>
                <h2 className={styles.infoTitle}>
                  인기 상품을
                  <br />
                  확인해 보세요
                </h2>
                <span className={styles.bottomLine}>
                  가장 HOT한 중고거래 물품을
                  <br />
                  판다 마켓에서 확인해 보세요
                </span>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div
              className={`${styles.itemList} ${styles.reverse} ${styles.alignRight}`}
            >
              <img src={searchItemImg} alt="상품 검색" />
              <div className={styles.info}>
                <span className={styles.topLine}>Search</span>
                <h2 className={styles.infoTitle}>
                  구매를 원하는
                  <br />
                  상품을 검색하세요
                </h2>
                <span className={styles.bottomLine}>
                  구매하고 싶은 물픔을 검색해서
                  <br />
                  쉽게 찾아보세요
                </span>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.itemList}>
              <img src={registerItemImg} alt="상품 등록" />
              <div className={styles.info}>
                <span className={styles.topLine}>Register</span>
                <h2 className={styles.infoTitle}>
                  판매를 원하는
                  <br />
                  상품을 등록하세요
                </h2>
                <span className={styles.bottomLine}>
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </span>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <div className={styles.commentContainer}>
        <Section>
          <div className={styles.comment}>
            <div className={styles.commentTitle}>
              <h2 className={styles.title}>
                믿을 수 있는
                <br />
                판다 마켓 중고거래
              </h2>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
}
