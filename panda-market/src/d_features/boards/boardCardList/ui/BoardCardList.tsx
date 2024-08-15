import { Article } from '@/entities/api';
import { BoardCard } from '@/d_features/boards/boardCard';

import * as S from './BoardCardList.style';

interface BoardCardListProps {
  boardList: Article[];
}

export const BoardCardList = ({ boardList }: BoardCardListProps) => {
  return (
    <S.Wrapper>
      {boardList.map((e) => {
        return (
          <BoardCard
            key={e.id}
            title={e.title}
            createdAt={e.createdAt}
            image={e.image}
            likeCount={e.likeCount}
            writerNickname={e.writer.nickname}
          />
        );
      })}
    </S.Wrapper>
  );
};
