import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { LinkButton } from "@/styles/ButtonStyle";
import { useRouter } from "next/router";
import Logo from "../../../public/images/logo.png";
import ProfileImage from "../../../public/images/i-profile.png";
import { useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  const startPathName = pathname.startsWith("/boards");
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [isLogout, setIsLogout] = useState<boolean>(false);

	useEffect(() => {
		const userInfo = localStorage.getItem('userInfo');
		setIsLoggedIn(!!userInfo);
		setIsLogout(true);
	}, [isLogout])

	const handleLogout = () => {
		localStorage.removeItem('userInfo');
		setIsLogout(false);
		router.push('/login');
	}

  const MENU_COLOR = {
    on: "#3692ff",
    default: "#4B5563",
  };

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
					{isLoggedIn && <HeaderNav>
            <ul>
              <li>
                <Link
                  href="/boards"
                  style={{
                    color: startPathName ? MENU_COLOR.on : MENU_COLOR.default,
                  }}
                >
                  자유게시판
                </Link>
              </li>
              <li>
                <Link href="">중고마켓</Link>
              </li>
            </ul>
          </HeaderNav>}
        </HeaderLeft>
        {isLoggedIn ? (
          <MyPageButton href="">
            <img src={ProfileImage.src} alt="프로필 이미지" />

						<button type="button" onClick={handleLogout}>로그아웃</button>
          </MyPageButton>
        ) : (
					<LinkButton href="/login">로그인</LinkButton>
        )}
      </HeaderWrap>
    </HeaderTag>
  );
}

const HeaderTag = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--gray200-color);
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
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
        margin-right: 30px;

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

const MyPageButton = styled(Link)``;
