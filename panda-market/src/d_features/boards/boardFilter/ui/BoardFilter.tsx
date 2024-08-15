import { BoardItemList } from '@/d_features/boards/boardItemList';
import { Dropdown } from '@/f_shared/ui/dropdown';
import { BOARD_DROPDOWN_CONTENTS } from '@/f_shared/config';
import { useSearch } from '@/f_shared/lib';
import { Search } from '@/f_shared/ui';
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
