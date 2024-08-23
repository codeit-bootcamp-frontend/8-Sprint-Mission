import Image from "next/image";
import styles from "./home.module.css";
import contentImg1 from "@/public/images/home/Img_home_01.png";
import contentImg2 from "@/public/images/home/Img_home_02.png";
import contentImg3 from "@/public/images/home/Img_home_03.png";
import facebookIcon from "@/public/images/icons/ic_facebook.svg";
import instagramIcon from "@/public/images/icons/ic_instagram.svg";
import twitterIcon from "@/public/images/icons/ic_twitter.svg";
import youtubeIcon from "@/public/images/icons/ic_youtube.svg";

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.banner}>
          <div className={styles.wrap}>
            <p className={styles.bannerTitle}>
              일상의 모든 물건은
              <br />
              거래해 보세요
            </p>
            <button className={styles.bannerBtn}>구경하러 가기</button>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <Image src={contentImg1} alt="Hot Item" />
            <div className={styles.contentTextBox}>
              <p className={styles.contentKeyword}>Hot Item</p>
              <p className={styles.contentTitle}>
                인기 상품을
                <br />
                확인해 보세요
              </p>
              <p className={styles.contentDescription}>
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.contentTextBox}>
              <p className={styles.contentKeyword}>Search</p>
              <p className={styles.contentTitle}>
                구매를 원하는
                <br />
                상품을 검색하세요
              </p>
              <p className={styles.contentDescription}>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
            <Image src={contentImg2} alt="Search" />
          </div>
          <div className={styles.content}>
            <Image src={contentImg3} alt="Register" />
            <div className={styles.contentTextBox}>
              <p className={styles.contentKeyword}>Register</p>
              <p className={styles.contentTitle}>
                판매를 원하는
                <br />
                상품을 등록하세요
              </p>
              <p className={styles.contentDescription}>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.banner} ${styles.bottomBanner}`}>
          <div className={styles.wrap}>
            <p className={styles.bannerTitle}>
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerCompany}>©codeit - 2024</div>
        <div className={styles.footerLinks}>
          <a href="privacy.html">Privacy Policy</a>
          <a href="faq.html">FAQ</a>
        </div>
        <div className={styles.footerSocialLinks}>
          <a href="https://www.facebook.com/" target="_blank">
            <Image src={facebookIcon} alt="facebook" />
          </a>
          <a href="https://x.com/" target="_blank">
            <Image src={twitterIcon} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <Image src={youtubeIcon} alt="youtube" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <Image src={instagramIcon} alt="instagram" />
          </a>
        </div>
      </footer>
    </>
  );
}
