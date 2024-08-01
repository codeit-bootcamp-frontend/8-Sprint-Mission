import styled from "styled-components";
import { Link } from "react-router-dom";
import icFacebook from "../../assets/images/ic_footer_facebook.png";
import icTwitter from "../../assets/images/ic_footer_twitter.png";
import icYoutube from "../../assets/images/ic_footer_youtube.png";
import icInstagram from "../../assets/images/ic_footer_instagram.png";

const StyledFooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.gray900};
  padding: 32px;
  height: 160px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 32px 24px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    padding: 32px 16px;
  }
`;

const StyledFooterArea = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCompanyWrapper = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray400};

  @media ${({ theme }) => theme.device.mobile} {
    position: absolute;
    left: 16px;
    bottom: 65px;
  }
`;

const StyledTextLinkArea = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;

  & a {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray200};
    text-decoration: none;
    cursor: pointer;
  }
`;

const StyledExternalLinkContainer = styled.div`
  display: flex;
  gap: 13px;

  & a {
    cursor: pointer;
  }
`;

interface ExternalLink {
  alt: string;
  link: string;
  img: string;
}

const EXTERNAL_LINKS_DETAILS: ExternalLink[] = [
  {
    alt: "페이스북 링크",
    link: "https://www.facebook.com",
    img: icFacebook,
  },
  { alt: "트위터 링크", link: "https://www.twitter.com", img: icTwitter },
  { alt: "유튜브 링크", link: "https://www.youtube.com", img: icYoutube },
  {
    alt: "인스타 링크",
    link: "https://www.instagram.com",
    img: icInstagram,
  },
];

function Footer() {
  return (
    <StyledFooterContainer>
      <StyledFooterArea>
        <StyledCompanyWrapper>@codeit - 2024</StyledCompanyWrapper>
        <StyledTextLinkArea>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </StyledTextLinkArea>
        <StyledExternalLinkContainer>
          {EXTERNAL_LINKS_DETAILS.map(({ alt, img, link }) => (
            <Link key={alt} to={link}>
              <img src={img} alt={alt} />
            </Link>
          ))}
        </StyledExternalLinkContainer>
      </StyledFooterArea>
    </StyledFooterContainer>
  );
}

export default Footer;
