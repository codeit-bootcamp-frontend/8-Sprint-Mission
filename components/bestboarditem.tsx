import Badge from "@/images/badge.png";
import Image from "next/image";
import styled from "styled-components";

export default function BestBoardItem() {
  return (
    <Wrapper>
      <Image src={Badge} alt="badge" />
      dasd
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 384px;
  height: 169px;
  border-radius: 8px;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  gap: 24px;
`;
