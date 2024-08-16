import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import s from './SearchBar.module.scss';
import SearchIcon from '@/public/svg/ic_search.svg';

type SearchBarProps = {
  onSearch: (keyword: string) => void;
  placeholder?: string;
};

function SearchBar({ onSearch, placeholder = '검색할 키워드를 입력해 주세요' }: SearchBarProps) {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const currentKeyword = (router.query.q as string) || '';
    setKeyword(currentKeyword);
  }, [router.query.q]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(keyword);
    }
  };

  return (
    <div className={s.container}>
      <SearchIcon alt='검색' />

      <input
        className={s.searchBar}
        value={keyword}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchBar;
