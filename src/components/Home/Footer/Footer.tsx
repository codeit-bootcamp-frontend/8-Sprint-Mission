import "./Footer.css";

import icFacebook from "../../../assets/images/ic_facebook.png";
import icTwitter from "../../../assets/images/ic_twitter.png";
import icYoutube from "../../../assets/images/ic_youtube.png";
import icInstagram from "../../../assets/images/ic_instagram.png";

import { Link } from "react-router-dom";

interface ExternalLinkDetails {
  alt: string;
  linkUrl: string;
  imgUrl: string;
}

const EXTERNAL_LINKS_DETAILS: ExternalLinkDetails[] = [
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

interface ExternalIconProps {
  externalLinkDetails: ExternalLinkDetails;
}

const ExternalIcon: React.FC<ExternalIconProps> = ({ externalLinkDetails }) => {
  const { alt, linkUrl, imgUrl } = externalLinkDetails;
  return (
    <Link className="external-link" to={linkUrl}>
      <img src={imgUrl} alt={alt} />
    </Link>
  );
};

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-bar">
        <div className="codeit-2024">@codeit - 2024</div>
        <div className="privacy-faq-link">
          <Link to="/privacy" className="privacy-link">
            Privacy Policy
          </Link>
          <Link to="/faq" className="faq-link">
            FAQ
          </Link>
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
};

export default Footer;
