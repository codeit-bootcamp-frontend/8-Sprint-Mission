import Link from "next/link";
import styled from "styled-components";
import FacebookImage from "../../../public/images/i-facebook.png";
import TwitterImage from "../../../public/images/i-twitter.png";
import YoutubeImage from "../../../public/images/i-youtube.png";
import InstagramImage from "../../../public/images/i-instagram.png";
import Image from "next/image";

interface SnsImageSize {
  width: number;
  height: number;
}

export default function Footer() {
  const SNS_IMAGE_SIZE: SnsImageSize = {
    width: 20,
    height: 20,
  };

  return (
    <FooterTag>
      <FooterWrap>
        <FooterCopyright>©codeit - 2024</FooterCopyright>
        <FooterMenu>
          <li>
            <Link href="">Privacy Policy</Link>
          </li>
          <li>
            <Link href="">FAQ</Link>
          </li>
        </FooterMenu>
        <FooterSns>
          <li>
            <Link href="">
              <Image
                src={FacebookImage.src}
                width={SNS_IMAGE_SIZE.width}
                height={SNS_IMAGE_SIZE.height}
                alt="페이스북"
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image
                src={TwitterImage.src}
                width={SNS_IMAGE_SIZE.width}
                height={SNS_IMAGE_SIZE.height}
                alt="트위터"
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image
                src={YoutubeImage.src}
                width={SNS_IMAGE_SIZE.width}
                height={SNS_IMAGE_SIZE.height}
                alt="유튜브"
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image
                src={InstagramImage.src}
                width={SNS_IMAGE_SIZE.width}
                height={SNS_IMAGE_SIZE.height}
                alt="인스타그램"
              />
            </Link>
          </li>
        </FooterSns>
      </FooterWrap>
    </FooterTag>
  );
}

const FooterTag = styled.footer`
  width: 100%;
  background-color: var(--gray900-color);
`;

const FooterWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1160px;
  height: 160px;
  padding: 0 20px;
  padding-top: 30px;
  margin: 0 auto;
  color: var(--gray400-color);
`;

const FooterCopyright = styled.div`
  width: 130px;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--gray400-color);
`;

const FooterMenu = styled.ul`
  li {
    float: left;
    margin: 0 15px;
    a {
      font-size: 1.6rem;
      font-weight: 400;
      color: var(--gray200-color);
    }
  }
`;

const FooterSns = styled.ul`
  width: 130px;
  li {
    float: left;
    margin-left: 12px;
    a {
      display: inline-block;
      max-width: 20px;

      img {
        width: 100%;
      }
    }
  }
`;
