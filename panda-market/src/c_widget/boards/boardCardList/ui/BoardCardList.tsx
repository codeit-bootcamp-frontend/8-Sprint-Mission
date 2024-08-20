import Link from 'next/link';
import { BoardCard } from '@/c_widget/boards/boardCard';
import { ROUTER_PATH } from '@/f_shared/config';
import { Article } from '@/entities/articles';

import * as S from './BoardCardList.style';

interface BoardCardListProps {
  boardList: Article[];
}

export const BoardCardList = ({ boardList }: BoardCardListProps) => {
  return (
    <S.Wrapper>
      {boardList.map((e) => {
        return (
          <Link href={ROUTER_PATH.BOARD.detail(e.id)} key={e.id}>
            <BoardCard
              title={e.title}
              createdAt={e.createdAt}
              image={e.image}
              likeCount={e.likeCount}
              writerNickname={e.writer.nickname}
            />
          </Link>
        );
      })}
    </S.Wrapper>
  );
};
