import { BoardSearch } from '@/widget/boardSearch';
import * as S from './BoardFilter.style';
import { Dropdown } from '@/shared/ui/dropdown';
import { BoardItemList } from '@/widget/boardItemList';
import { BOARD_DROPDOWN_CONTENTS } from '@/shared/config';
import { useHandleDropdownContent } from '../lib';
import { useGetAllBoards } from '@/features/boards';

export const BoardFilter = () => {
  const { data: allBoards } = useGetAllBoards({
    orderBy: 'recent',
    page: 1,
    pageSize: 10,
  });
  const { dropdownValue, handleDropdownListClick } = useHandleDropdownContent();
  return (
    <S.Wrapper>
      <S.SearchSection>
        <BoardSearch />
        <Dropdown
          contentList={BOARD_DROPDOWN_CONTENTS}
          onContentClick={handleDropdownListClick}
        >
          {dropdownValue}
        </Dropdown>
      </S.SearchSection>
      <BoardItemList boardItemList={allBoards?.list ?? []} />
    </S.Wrapper>
  );
};
