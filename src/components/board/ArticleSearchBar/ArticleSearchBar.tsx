import styles from './ArticleSearchBar.module.scss';

import UInput from '@/src/core/ui/inputs/UInput/UInput';
import IconSearch from '@/src/assets/images/icons/ic_search.svg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BasicType } from '@/src/types/BasicTypes';
import Image from 'next/image';

type ArticleSearchBarProps = Pick<BasicType, 'onSearch'>;

const ArticleSearchBar = ({ ...props }: ArticleSearchBarProps) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    const currentKeyword = (router.query.q as string) || '';
    setKeyword(currentKeyword);
  }, [router.query.q]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.onSearch(keyword);
    }
  };

  return (
    <>
      <div className={styles['searchBar__wrapper']}>
        <Image src={IconSearch} alt="검색 아이콘" />
        <UInput
          className={styles['searchBar__input']}
          keyword={keyword}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="검색할 키워드를 입력해주세요"
        />
      </div>
    </>
  );
};

export default ArticleSearchBar;
