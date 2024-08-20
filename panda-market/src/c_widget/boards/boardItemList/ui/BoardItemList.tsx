import React from 'react';
import { BoardItem } from '@/c_widget/boards/boardItem/ui';
import { useFetchBoards } from '../lib';
import { BoardDropdownContentType, ROUTER_PATH } from '@/f_shared/config';

import * as S from './BoardItemList.style';
import Link from 'next/link';

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
            <Link href={ROUTER_PATH.BOARD.detail(e.id)} key={e.id}>
              <BoardItem
                image={e.image}
                likeCount={e.likeCount}
                title={e.title}
                updatedAt={e.updatedAt}
                writer={e.writer}
              />
            </Link>
          );
        })}
      </S.Wrapper>
    );
  },
);
