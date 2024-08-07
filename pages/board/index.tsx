import BestBoardItem from "@/components/bestboarditem";
import BoardItem from "@/components/boarditem";
import PrimaryButton from "@/components/primarybutton";
import styled from "styled-components";
import arrowdownIcon from "@/images/arrow_down.png";
import searchIcon from "@/images/search.png";
import Image from "next/image";
import { useState } from "react";

export default function Board() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Container>
      <Title>Best 게시글</Title>
      <BestBoardItem />
      <ListContainer>
        <Title>게시글</Title>
        <PrimaryButton>글쓰기</PrimaryButton>
      </ListContainer>
      <ListContainer>
        <Input
          id="search"
          name="search"
          type="search"
          placeholder="검색할 상품을 입력해주세요"
        />
        <SelectWrapper onClick={handleSelectClick}>
          <Select>
            최신순
            <Image src={arrowdownIcon} alt="arrowdown" />
          </Select>
          {isOpen && (
            <Options>
              <Option>최신순</Option>
              <Option>좋아요순</Option>
            </Options>
          )}
        </SelectWrapper>
      </ListContainer>
      <BoardItem />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 12px;
  background-color: #f3f4f6;
  border: none;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 9px 20px 9px 45px;
  outline: none;
  background-image: url(${searchIcon.src});
  background-repeat: no-repeat;
  background-position: 15px center; /* 이미지 위치 조절 */
  background-size: 24px 24px; /* 이미지 크기 조절 */
`;
const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Select = styled.div`
  width: 130px;
  height: 42px;
  border-radius: 12px;
  border: solid 1px #9ca3af;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Options = styled.div`
  width: 130px;
  height: 84px;
  border-radius: 12px;
  border: solid 1px #9ca3af;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Option = styled.button`
  background-color: #ffffff;
  height: 44px;
  border: none;
  font-size: 16px;
  border-bottom: 1px solid #9ca3af;

  &:last-child {
    border-bottom: none;
  }
`;
