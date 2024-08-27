import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>©codeit - 2024</p>
        <div className={styles.policy}>
          <ul className={styles.policyList}>
            <li>
              <a href="./privacy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="./faq.html">FAQ</a>
            </li>
          </ul>
        </div>
        <div className={styles.snsList}>
          <ul className={styles.sns}>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className={styles.facebookIcon}
              >
                <span className="ir_pm">페이스북 바로가기</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className={styles.twitterIcon}
              >
                <span className="ir_pm">트위터 바로가기</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                className={styles.youtubeIcon}
              >
                <span className="ir_pm">유튜브 바로가기</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className={styles.instagramIcon}
              >
                <span className="ir_pm">인스타그램 바로가기</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
