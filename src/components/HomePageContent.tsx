import styles from "./HomePageContent.module.css";
import helloPanda from "../assets/Img_home_top.png";
import hotItemsImage from "../assets/Img_home_01.png"
import searchImage from "../assets/Img_home_02.png";
import registerImage from "../assets/Img_home_03.png";
import byePanda from "../assets/Img_home_bottom.png";
import { useNavigate } from "react-router-dom";

function HomePageContent() {

    const navigate = useNavigate();
    
    return (
        <main>
            <section className={styles.greetingSection}>
                <div className={styles.greetingInnerContainer}>
                    <div className={styles.greetingContent}>
                        <p className={styles.greetingText}>일상의 모든 물건을 거래해 보세요</p>
                        <button className={styles.greetingButton} onClick={() => navigate("/items")}>구경하러 가기</button>
                    </div>
                    <img src={helloPanda} className={styles.greetingImage} alt="인사하는 판다" />
                </div>
            </section>
            <section className={styles.leftySection}>
                <div className={styles.leftyContainer}>
                    <img src={hotItemsImage} className={styles.contentImage} alt="둘러보는 판다" />
                    <div className={styles.hotContent}>
                        <p className={styles.promotionLabel}>Hot item</p>
                        <p className={styles.promotionTitle}>인기 상품을 확인해 보세요</p>
                        <p className={styles.promotionContent}>가장 HOT한 중고거래 물품을<br />판다 마켓에서 확인해 보세요</p>
                    </div>
                </div>
            </section>
            <section className={styles.rightySection}>
                <div className={styles.rightyContainer}>
                    <div className={styles.searchContent}>
                        <p className={styles.promotionLabel}>Search</p>
                        <p className={styles.promotionTitle}>구매를 원하는 상품을 검색하세요</p>
                        <p className={styles.promotionContent}>구매하고 싶은 물품은 검색해서<br />쉽게 찾아보세요</p>
                    </div>
                    <img src={searchImage} className={styles.contentImage} alt="검색해 보세요!" />
                </div>
            </section>
            <section className={styles.leftySection}>
                <div className={styles.leftyContainer}>
                    <img src={registerImage} className={styles.contentImage} alt="등록하세요!" />
                    <div className={styles.registerContent}>
                        <p className={styles.promotionLabel}>Register</p>
                        <p className={styles.promotionTitle}>판매를 원하는 상품을 등록하세요</p>
                        <p className={styles.promotionContent}>어떤 물건이든 판매하고 싶은 상품을<br />쉽게 등록하세요</p>
                    </div>
                </div>
            </section>
            <section className={styles.goodbyeSection}>
                <div className={styles.goodbyeInnerContainer}>
                    <p className={styles.goodbyeText}>믿을 수 있는 판다마켓 중고거래</p>
                    <img src={byePanda} className={styles.goodbyeImage} alt="집에 가는 판다" />
                </div>
            </section>
        </main>
    )
}

export default HomePageContent;