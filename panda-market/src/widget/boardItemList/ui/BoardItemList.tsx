import { BoardItem } from '@/widget/boardItem/ui/';
import { Article } from '@/entities/articles';

import * as S from './BoardItemList.style';

interface BoardItemListProps {
  boardItemList: Article[];
}

export const BoardItemList = ({ boardItemList }: BoardItemListProps) => {
  return (
    <S.Wrapper>
      {boardItemList.map((e) => {
        return (
          <BoardItem
            key={e.id}
            image={e.image}
            likeCount={e.likeCount}
            title={e.title}
            updatedAt={e.updatedAt}
            writerNickname={e.writer.nickname}
          />
        );
      })}
    </S.Wrapper>
  );
};
