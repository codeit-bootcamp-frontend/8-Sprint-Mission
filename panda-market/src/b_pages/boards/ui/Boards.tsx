import { BoardCardList } from '@/d_features/boards/boardCardList';
import { useBestBoards } from '@/d_features/boards/getBestBoards';
import { BoardFilter } from '@/d_features/boards/boardFilter';

import { SectionTitle } from '@/f_shared/ui/title';
import { LinkSmall } from '@/f_shared/ui/buttons';

import * as S from './Boards.style';

export const Boards = () => {
  const { data: bestBoards } = useBestBoards({
    pageSize: 3,
  });

  return (
    <S.Wrapper>
      <S.Section>
        <SectionTitle>베스트 게시글</SectionTitle>
        <BoardCardList boardList={bestBoards?.list ?? []} />
      </S.Section>
      <S.Section>
        <S.AllBoardsHeader>
          <SectionTitle>게시글</SectionTitle>
          <LinkSmall $size="40" $style="default">
            글쓰기
          </LinkSmall>
        </S.AllBoardsHeader>
        <BoardFilter />
      </S.Section>
    </S.Wrapper>
  );
};
