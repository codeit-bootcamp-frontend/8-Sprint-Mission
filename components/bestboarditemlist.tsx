import Badge from "@/images/badge.png";
import Image from "next/image";
import styled from "styled-components";
import favorite from "@/images/favorite.png";
import { BoardItemType } from "@/pages/boards";
import Link from "next/link";

interface BoardItemListProps {
  boards: BoardItemType[];
}

interface BoardItemProps {
  board: BoardItemType;
}

export default function BestBoardItemList({ boards }: BoardItemListProps) {
  return (
    <BoardItemContainer>
      {boards.map((board) => (
        <BestBoardItem key={board.id} board={board} />
      ))}
    </BoardItemContainer>
  );
}

function BestBoardItem({ board }: BoardItemProps) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}.${month}.${day}`;
  }

  return (
    <StyledLink href={`/boards/${board.id}`}>
      <Wrapper>
        <Image src={Badge} alt="badge" />
        <BoardWrapper>
          <TitleWrapper>
            <BoardTitle>{board.title}</BoardTitle>
            <Image
              src={board.image}
              alt="BestBoardImage"
              width={72}
              height={72}
            />
          </TitleWrapper>
          <WriterWrapper>
            <WriterLeftElement>
              {board.writer.nickname}
              <Image src={favorite} alt="favorite" />
              {board.likeCount}+
            </WriterLeftElement>
            <span>{formatDate(board.createdAt)}</span>
          </WriterWrapper>
        </BoardWrapper>
      </Wrapper>
    </StyledLink>
  );
}

const BoardItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 744px) {
    grid-template-columns: repeat(2, 1fr);

    & > div:nth-child(3) {
      display: none; /* 3번째 게시글을 숨김 */
    }
  }

  @media (max-width: 376px) {
    grid-template-columns: repeat(1, 1fr);

    & > div:nth-child(2) {
      display: none;
    }
    > div:nth-child(3) {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 169px;
  border-radius: 8px;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  gap: 15px;
`;

const BoardTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const BoardWrapper = styled.div`
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WriterLeftElement = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
