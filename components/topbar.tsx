import PrimaryButton from "./primarybutton";
import pandaLogo from "@/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function Topbar() {
  return (
    <TopbarHeader>
      <LeftElement>
        <Link href="/">
          <Image src={pandaLogo} alt="Panda Logo" />
        </Link>
        <Link href="/">
          <PrimaryButton>자유게시판</PrimaryButton>
        </Link>
        <Link href="/">
          <PrimaryButton>중고마켓</PrimaryButton>
        </Link>
      </LeftElement>
      <PrimaryButton>로그인</PrimaryButton>
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
`;

const LeftElement = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
