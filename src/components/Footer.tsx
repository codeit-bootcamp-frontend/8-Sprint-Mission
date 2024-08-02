import styles from "./Footer.module.css";
import facebookIcon from "../assets/ic_facebook.png";
import twitterIcon from "../assets/ic_twitter.png";
import youtubeIcon from "../assets/ic_youtube.png";
import instagramIcon from "../assets/ic_instagram.png";

function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInnerContainer}>
                <span className={styles.footerLabel}>©codeit - 2024</span>
                <div className={styles.footerPolicies}>
                    <span className={styles.footerPolicy}>Privacy Policy</span>
                    <span className={styles.footerPolicy}>FAQ</span>
                </div>
                <div className={styles.footerMedia}>
                    <img src={facebookIcon} className={styles.footerMediaIcon} alt="facebook" />
                    <img src={twitterIcon} className={styles.footerMediaIcon} alt="twitter" />
                    <img src={youtubeIcon} className={styles.footerMediaIcon} alt="youtube" />
                    <img src={instagramIcon} className={styles.footerMediaIcon} alt="instagram" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;