import { SNS_LINKS } from ' constants/infomations/snsLinks';
import styled from 'styled-components';
import Image from './Image';

function Footer() {
  return (
    <StyledFooter>
      <div className="footer-company">©codeit - 2024</div>
      <div className="footer-anchors">
        <a href="/privacy">Privacy Policy</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className="footer-sns">
        {SNS_LINKS.map(link => (
          <a key={link.id} href={link.href} rel="noreferrer" target={link.target}>
            <Image src={link.src} alt={link.alt} height={'2rem'} width={'2rem'} />
          </a>
        ))}
      </div>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  height: 16rem;
  padding: 3.2rem 20rem;
  background-color: var(--cool-gray);

  display: flex;
  justify-content: space-between;

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.909rem;
  text-align: center;
  color: var(--cool-gray-200);

  & .footer-company {
    color: var(--brand-gray);
  }

  & .footer-anchors,
  & .footer-sns {
    display: flex;
  }

  & .footer-anchors {
    gap: 3rem;
  }

  & .footer-sns {
    gap: 1.2rem;
  }

  @media all and (max-width: 767px) {
    position: relative;
    padding: 3.2rem;
    & .footer-company {
      position: absolute;
      bottom: 3.2rem;
    }
  }
`;
