import "../styles/components/Footer.css";

import icFacebook from "../assets/ic_facebook.png";
import icTwitter from "../assets/ic_twitter.png";
import icYoutube from "../assets/ic_youtube.png";
import icInstagram from "../assets/ic_instagram.png";

const EXTERNAL_LINKS_DETAILS = [
  {
    alt: "페이스북 링크",
    linkUrl: "https://www.facebook.com",
    imgUrl: icFacebook,
  },
  { alt: "트위터 링크", linkUrl: "https://www.twitter.com", imgUrl: icTwitter },
  { alt: "유튜브 링크", linkUrl: "https://www.youtube.com", imgUrl: icYoutube },
  {
    alt: "인스타 링크",
    linkUrl: "https://www.instagram.com",
    imgUrl: icInstagram,
  },
];

function ExternalIcon({ externalLinkDetails }) {
  const { alt, linkUrl, imgUrl } = externalLinkDetails;
  return (
    <a className="external-link" href={linkUrl}>
      <img src={imgUrl} alt={alt} />
    </a>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-bar">
        <div className="codeit-2024">@codeit - 2024</div>
        <div className="privacy-faq-link">
          <a className="privacy-link" href="/pages/privacy">
            Privacy Policy
          </a>
          <a className="faq-link" href="/pages/faq">
            FAQ
          </a>
        </div>
        <div className="external-icons">
          {EXTERNAL_LINKS_DETAILS.map((externalLinkDetails) => (
            <ExternalIcon
              key={externalLinkDetails.alt}
              externalLinkDetails={externalLinkDetails}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
