import { Search } from '@/shared/ui';
import { useSearch } from '@/shared/lib';

import * as S from './BoardSearch.style';

export const BoardSearch = () => {
  const { searchValue, handleChange, handleKeyboardSubmit } = useSearch();
  return (
    <S.Wrapper>
      <Search
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyboardSubmit}
      />
    </S.Wrapper>
  );
};
