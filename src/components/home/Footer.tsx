import { styled } from "styled-components";

import facebookIcon from "core/assets/icons/sns/facebook/facebook.svg";
import twitterIcon from "core/assets/icons/sns/twitter/twitter.svg";
import youtubeIcon from "core/assets/icons/sns/youtube/youtube.svg";
import instagramIcon from "core/assets/icons/sns/instagram/instagram.svg";

const FooterInfo = styled.div`
  background-color: var(--footer-color);
  height: 16rem;
  padding: 1.5rem 10rem;
  & .version {
    color: #676767;
  }

  & .bottomNav {
    display: flex;
    gap: 30px;
    text-decoration: none;
    color: #cfcfcf;
    & a {
      color: var(--font-footer);
      cursor: pointer;
    }
  }

  & .sns {
    display: flex;
    gap: 12px;
    width: 116px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--font-footer);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.909rem;
  align-items: center;
`;

const Footer = () => {
  return (
    <footer>
      <FooterInfo>
        <FooterContent>
          <div className="version">@codeit - 2024</div>
          <div className="bottomNav">
            <a href="/privacy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="sns">
            <a href="https://www.facebook.com/?locale=ko_KR" target="_blank">
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a href="https://x.com/?lang=ko" target="_blank">
              <img src={twitterIcon} alt="twitter" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtubeIcon} alt="youtube" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagramIcon} alt="instagram" />
            </a>
          </div>
        </FooterContent>
      </FooterInfo>
    </footer>
  );
};

export default Footer;

/*
<footer>
    <section class="bottom-info">
        <div class="bottom-content">
            <div class="version">
                @codeit - 2024
            </div>
            <div class="bottom-nav">
                <a href="/privacy">
                    Privacy Policy
                </a>
                <a href="/faq">
                    FAQ
                </a>
            </div>
            <div class="sns">
                <a href="https://www.facebook.com/?locale=ko_KR" target="_blank">
                    <img src="source/icons/facebook/ic_facebook.svg" alt="facebook" />
                </a>
                <a href="https://x.com/?lang=ko" target="_blank">
                    <img src="source/icons/twitter/ic_twitter.svg" alt="twitter" />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                    <img src="source/icons/youtube/ic_youtube.svg" alt="youtube" /> 
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <img src="source/icons/instagram/ic_instagram.svg" alt="instagram" />
                </a>
            </div>
        </div>
    </section>
</footer>
*/
