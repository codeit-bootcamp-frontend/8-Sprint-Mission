import styled from "styled-components";
import Logo from "../../../public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { LinkButton } from "@/styles/ButtonStyle";

export default function Header() {
  return (
    <HeaderTag>
      <HeaderWrap>
        <HeaderLeft>
          <HeaderLogo href="/">
            <HeaderLogoImage
              src={Logo.src}
              width={155}
              height={50}
              alt="판다마켓"
            />
          </HeaderLogo>
          <HeaderNav>
            <ul>
              <li>
                <Link href="">자유게시판</Link>
              </li>
              <li>
                <Link href="">중고마켓</Link>
              </li>
            </ul>
          </HeaderNav>
        </HeaderLeft>
        <LinkButton href="">로그인</LinkButton>
      </HeaderWrap>
    </HeaderTag>
  );
}

const HeaderTag = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--gray100-color);
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1160px;
  height: 70px;
  padding: 0 20px;
  margin: 0 auto;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderNav = styled.nav`
  margin-left: 30px;

  ul {
    li {
      float: left;

      a {
        font-size: 1.8rem;
        font-weight: 700;
        margin-right: 15px;

        &:hover {
          color: var(--blue-color);
        }
      }
    }
  }
`;

const HeaderLogo = styled(Link)`
  display: block;
  max-width: 155px;
`;

const HeaderLogoImage = styled(Image)`
  width: 100%;
`;
