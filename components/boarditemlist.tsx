import styled from "styled-components";
import favorite from "@/images/favorite.png";
import Image from "next/image";
import { BoardItemProps, BoardItemListProps } from "@/interfaces/boardItem";
import Link from "next/link";
import { FormatDate } from "@/pages/util/formatDate";
import defaultImage from "@/images/img_default.png";

export default function BoardItemList({ boards }: BoardItemListProps) {
  return (
    <>
      {boards.map((board) => (
        <BoardItem key={board.id} board={board} />
      ))}
    </>
  );
}

function BoardItem({ board }: BoardItemProps) {
  return (
    <StyledLink href={`/boards/${board.id}`}>
      <Wrapper>
        <TitleWrapper>
          <BoardTitle>{board.title}</BoardTitle>
          <Image
            src={board.image || defaultImage}
            alt="BestBoardImage"
            width={72}
            height={72}
          />
        </TitleWrapper>
        <WriterWrapper>
          <span>
            {board.writer.nickname} {FormatDate(board.createdAt)}
          </span>
          <LikeWrapper>
            <Image src={favorite} alt="favorite" />
            <span> {board.likeCount}+</span>
          </LikeWrapper>
        </WriterWrapper>
      </Wrapper>
    </StyledLink>
  );
}
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 138px;
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  gap: 24px;
  border-bottom: solid 1px #e5e7eb;
`;

const BoardTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
`;
