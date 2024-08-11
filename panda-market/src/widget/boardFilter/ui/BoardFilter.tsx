import { BoardItemList } from '@/widget/boardItemList';
import { Dropdown } from '@/shared/ui/dropdown';
import { BOARD_DROPDOWN_CONTENTS } from '@/shared/config';
import { useSearch } from '@/shared/lib';
import { Search } from '@/shared/ui';
import { useFetchBoards, useHandleDropdownContent } from '../lib';

import * as S from './BoardFilter.style';

export const BoardFilter = () => {
  const { dropdownValue, handleDropdownListClick } = useHandleDropdownContent();
  const { keyword, searchValue, handleChange, handleKeyboardSubmit } =
    useSearch();

  return (
    <S.Wrapper>
      <S.FilterContainter>
        <Search
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyboardSubmit}
        />
        <Dropdown
          contentList={BOARD_DROPDOWN_CONTENTS}
          onContentClick={handleDropdownListClick}
        >
          {dropdownValue}
        </Dropdown>
      </S.FilterContainter>
      <BoardItemList keyword={keyword} dropdownValue={dropdownValue} />
    </S.Wrapper>
  );
};
