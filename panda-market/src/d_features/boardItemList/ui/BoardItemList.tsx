import React from 'react';
import { BoardItem } from '@/d_features/boardItem/ui';
import { useFetchBoards } from '../lib';
import { BoardDropdownContentType } from '@/f_shared/config';

import * as S from './BoardItemList.style';

interface BoardItemListProps {
  dropdownValue: BoardDropdownContentType;
  keyword: string;
}

export const BoardItemList = React.memo(
  ({ dropdownValue, keyword }: BoardItemListProps) => {
    const { boardItemList } = useFetchBoards({ dropdownValue, keyword });
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
  },
);
