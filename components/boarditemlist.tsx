import styled from "styled-components";
import favorite from "@/images/favorite.png";
import Image from "next/image";
import { BoardItemType } from "@/pages/boards";

interface BoardItemProps {
  board: BoardItemType;
}

interface BoardItemListProps {
  boards: BoardItemType[];
}

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
  function formatDate(dateString: string) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}.${month}.${day}`;
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <BoardTitle>{board.title}</BoardTitle>
        <Image src={board.image} alt="BestBoardImage" width={72} height={72} />
      </TitleWrapper>

      <WriterWrapper>
        <span>
          {board.writer.nickname} {formatDate(board.createdAt)}
        </span>
        <LikeWrapper>
          <Image src={favorite} alt="favorite" />
          <span> {board.likeCount}+</span>
        </LikeWrapper>
      </WriterWrapper>
    </Wrapper>
  );
}

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
