import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import RoutePath from "RoutePath";
import facebookSvg from "assets/svg/facebook.svg";
import twitterSvg from "assets/svg/twitter.svg";
import youtubeSvg from "assets/svg/youtube.svg";
import instagramSvg from "assets/svg/instagram.svg";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <ul className={styles.list}>
          <li>
            <p className={styles.codeit}>@codeit - 2024</p>
          </li>
          <li>
            <div className={styles.info}>
              <Link to={RoutePath.privacy}>Privacy Policy</Link>
              <Link to={RoutePath.faq}>FAQ</Link>
            </div>
          </li>
          <li>
            <div className={styles.social}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={facebookSvg} width={18} height={18} alt="" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src={twitterSvg} width={18} height={18} alt="" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <img src={youtubeSvg} width={18} height={18} alt="" />
              </a>
              <a href="htts://instagram.com" target="_blank" rel="noreferrer">
                <img src={instagramSvg} width={18} height={18} alt="" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
