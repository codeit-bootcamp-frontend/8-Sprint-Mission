import SearchIcon from '@/shared/assets/icons/ic_search/ic_search.svg';

import * as S from './Search.style';

interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
}

export const Search = ({ value, onChange, onKeyDown }: SearchProps) => {
  return (
    <S.Wrapper>
      <S.Input
        placeholder="검색할 상품을 입력해주세요"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
    </S.Wrapper>
  );
};
