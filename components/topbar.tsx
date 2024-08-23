import pandaLogo from "@/images/logo.png";
import mobilePandaLogo from "@/images/mobilelogo.png";
import userIcon from "@/images/user.png";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { isLoggedIn } from "@/pages/util/api";
import { useEffect, useState } from "react";
import PrimaryButton from "./primarybutton";

export default function Topbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isLoggedIn() == true) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const handleLogClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogoutClick = () => {
    setIsLogin(false);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/login"; // 로그아웃 후 리다이렉션
  };

  return (
    <TopbarHeader>
      <LeftElement>
        <Link href="/">
          <LogoWrapper>
            <Image
              src={pandaLogo}
              alt="Panda Logo"
              className="desktop"
              width={153}
              height={51}
            />
            <Image
              src={mobilePandaLogo}
              alt="Mobile Panda Logo"
              className="mobile"
            />
          </LogoWrapper>
        </Link>
        <ButtonWrapper>
          <Link href="/boards">
            <ListButton>자유게시판</ListButton>
          </Link>
          <Link href="/">
            <ListButton>중고마켓</ListButton>
          </Link>
        </ButtonWrapper>
      </LeftElement>
      {isLogin ? (
        <LogOutWrapper onClick={handleLogClick}>
          <Image src={userIcon} alt="userIcon" />
          {isOpen && (
            <LogOutButton onClick={handleLogoutClick}>로그아웃</LogOutButton>
          )}
        </LogOutWrapper>
      ) : (
        <Link href="/login">
          <PrimaryButton>로그인</PrimaryButton>
        </Link>
      )}
    </TopbarHeader>
  );
}

const TopbarHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 200px;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
  @media (max-width: 744px) {
    padding: 10px 24px;
  }
`;

const LeftElement = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  @media (max-width: 376px) {
    gap: 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ListButton = styled.button`
  border: none;
  font-size: 18px;
  font-weight: 700;
  background-color: #ffffff;
  @media (max-width: 376px) {
    font-size: 16px;
  }
`;

const LogoWrapper = styled.div`
  position: relative;

  .desktop {
    display: block;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 376px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
`;

const LogOutWrapper = styled.div`
  position: relative;
`;

const LogOutButton = styled.button`
  position: absolute;
  width: 139px;
  height: 51px;
  border: solid 1px #d1d5db;
  border-radius: 8px;
  padding: 16px 0;
  margin-top: 50px;
  margin-left: -130px;
  font-size: 16px;
  font-weight: 400;
  background-color: #ffffff;
`;
