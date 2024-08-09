import getArticles, { IArticle, orderType } from '@/apis/getArticles';
import ArticleList from './ArticleList';
import { useState } from 'react';
import Button from '../@shared/Button';
import styles from './ArticleSection.module.scss';
import Link from 'next/link';
import CustomImage from '../@shared/CustomImage';
import { DEVICE_MAX_WIDTH } from '@/constants/mediaQuerySize';
import useToggle from '@/hooks/useToggle';
import sortIcon from '@/public/images/market/sort-icon.png';
import dropDownIcon from '@/public/images/market/order-dropdown.png';
import useWindowSize from '@/hooks/useWindowSize';

const orderByObject = {
  recent: '최신순',
  like: '좋아요순',
};

interface ArticleSectionProps {
  initialArticleList: IArticle[];
}

function ArticleSection({ initialArticleList }: ArticleSectionProps) {
  const { innerWidth } = useWindowSize();
  const [articleList, setArticleList] = useState(initialArticleList);
  const [searchValue, setSearchValue] = useState('');
  const [orderBy, setOrderBy] = useState<orderType>('recent');
  const [isOpen, toggleIsOpen] = useToggle();

  const handleOrderByClick = async (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const { value } = (event.target as HTMLDivElement).dataset;

    if (value) {
      // dataset에 있는 데이터로 재정렬 요청 후 토글 닫기
      const { list } = await getArticles({ order: value as orderType });
      setArticleList(() => list);
      setOrderBy(value as orderType);
      toggleIsOpen();
    }
  };

  const handleSearchSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const { value } = (event.target as HTMLFormElement)['search'];
    const { list } = await getArticles({ keyword: value });

    setArticleList(() => list);
  };

  const handleIsOpenClick = () => {
    toggleIsOpen();
  };

  return (
    <>
      <section>
        <div className={styles.titleAndButton}>
          <h2>게시글</h2>
          <Link href='/'>
            <Button category={'large'}>글쓰기</Button>
          </Link>
        </div>
        <div className={styles.inputAndDropdown}>
          <form onSubmit={handleSearchSubmit}>
            <input
              name={'search'}
              placeholder={'검색할 상품을 입력해주세요'}
              autoComplete={'off'}
            />
          </form>
          <div className={styles.dropdownWrapper}>
            <div className={styles.dropdownTrigger} onClick={handleIsOpenClick}>
              {innerWidth > DEVICE_MAX_WIDTH.mobile && (
                <span>{orderByObject[orderBy]}</span>
              )}
              <CustomImage
                src={
                  innerWidth > DEVICE_MAX_WIDTH.mobile ? dropDownIcon : sortIcon
                }
                alt={'드롭다운 열기 아이콘'}
                height={24}
                width={24}
              />
            </div>
            {isOpen && (
              <div className={styles.dropdown} onClick={handleOrderByClick}>
                <button data-value={'recent'}>최신순</button>
                <button data-value={'like'}>좋아요순</button>
              </div>
            )}
          </div>
        </div>
      </section>
      <ArticleList articleList={articleList} />
    </>
  );
}

export default ArticleSection;
