import React from "react";
import { Link } from "react-router-dom";
import "../scss/Footer.scss";

import icFacebook from "../../../assets/HomePage/ic_facebook.png";
import icTwitter from "../../../assets/HomePage/ic_twitter.png";
import icYoutube from "../../../assets/HomePage/ic_youtube.png";
import icInstagram from "../../../assets/HomePage/ic_instagram.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <p>©codeit - 2024</p>
        </div>
        <div className="footer__center">
          <Link to="/html/privacy.html" target="_blank">
            Privacy Policy
          </Link>
          <Link to="/html/faq.html" target="_blank">
            FAQ
          </Link>
        </div>
        <ul className="footer__right footer__icons">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icFacebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.x.com/" target="_blank" rel="noreferrer">
              <img src={icTwitter} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src={icYoutube} alt="YouTube" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icInstagram} alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
