"use client";

import styled from "styled-components";
import Logo from "@/assets/images/logo/logo.svg";
import Profile from "@/assets/images/icons/ic_profile.svg";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderBetweenContainer>
        <HeaderTitleContainer>
          <Link href="/" aria-label="홈으로 이동">
            <HeaderLogo src={Logo} alt="판다마켓 로고" width="153" />
          </Link>
          <nav>
            <HeaderNavUl>
              <li>
                <Link href="/community" aria-label="커뮤니티로 이동">
                  자유게시판
                </Link>
              </li>
              <li>
                <Link href="/items" aria-label="상품으로 이동">
                  중고마켓
                </Link>
              </li>
            </HeaderNavUl>
          </nav>
        </HeaderTitleContainer>
        <Link href="" aria-label="프로필로 이동">
          <Image src={Profile} alt="프로필 가기" width="40" />
        </Link>
      </HeaderBetweenContainer>
    </HeaderContainer>
  );
}

// styled-components
const HeaderContainer = styled.div`
  height: 70px;
  border-bottom: 1px solid #dfdfdf;
`;

const HeaderBetweenContainer = styled.div`
  height: 70px;
  margin: 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled(Image)`
  margin-right: 32px;
`;

const HeaderNavUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  font-weight: 700;
  font-size: 18px;
  color: #4b5563;

  li a {
    &:hover {
      color: #3692ff;
    }
  }
`;
