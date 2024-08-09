import PrimaryButton from "./primarybutton";
import pandaLogo from "@/images/logo.png";
import mobilePandaLogo from "@/images/mobilelogo.png";
import userIcon from "@/images/user.png";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function Topbar() {
  return (
    <TopbarHeader>
      <LeftElement>
        <Link href="/">
          <LogoWrapper>
            <Image src={pandaLogo} alt="Panda Logo" className="desktop" />
            <Image
              src={mobilePandaLogo}
              alt="Mobile Panda Logo"
              className="mobile"
            />
          </LogoWrapper>
        </Link>
        <ButtonWrapper>
          <Link href="/">
            <ListButton>자유게시판</ListButton>
          </Link>
          <Link href="/">
            <ListButton>중고마켓</ListButton>
          </Link>
        </ButtonWrapper>
      </LeftElement>
      <Image src={userIcon} alt="userIcon" />
      {/* <PrimaryButton>로그인</PrimaryButton> */}
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
