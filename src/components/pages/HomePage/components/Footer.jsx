import styled from 'styled-components';
import facebookIcon from '../../../../images/ic_facebook.svg';
import twitterIcon from '../../../../images/ic_twitter.svg';
import youtubeIcon from '../../../../images/ic_youtube.svg';
import instagramIcon from '../../../../images/ic_instagram.svg';

function Footer() {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <TextBox>©codeit - 2024</TextBox>
        <UtilityBox>
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </UtilityBox>
        <SocialBox>
          <div style={{ backgroundImage: `url(${facebookIcon})` }} />
          <div style={{ backgroundImage: `url(${twitterIcon})` }} />
          <div style={{ backgroundImage: `url(${youtubeIcon})` }} />
          <div style={{ backgroundImage: `url(${instagramIcon})` }} />
        </SocialBox>
      </ContentWrapper>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  height: 160px;
  padding-top: 32px;
  display: flex;
  justify-content: center;
  background-color: var(--gray900);
`;

const ContentWrapper = styled.div`
  width: 1120px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextBox = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: var(--gray400);
`;

const UtilityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  & span {
    font-weight: 400;
    font-size: 16px;
    color: var(--gray200);
  }
`;

const SocialBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & div {
    width: 20px;
    height: 20px;
  }
`;
