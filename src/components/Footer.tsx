import fackbookImg from "../assets/ic_facebook.svg";
import twitterImg from "../assets/ic_twitter.svg";
import youtubeImg from "../assets/ic_youtube.svg";
import instagramImg from "../assets/ic_instagram.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__copyright">
          <p>©codeit - 2024</p>
        </div>
        <div className="footer__etc">
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="footer__messenger">
          <a href="https://www.facebook.com/">
            <img src={fackbookImg} alt="facebook" />
          </a>
          <a href="https://x.com/">
            <img src={twitterImg} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={youtubeImg} alt="youtube" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagramImg} alt="instagram" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
