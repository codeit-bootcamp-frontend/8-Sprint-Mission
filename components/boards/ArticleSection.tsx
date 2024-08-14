import getArticles, { IArticle, orderType } from '@/apis/getArticles';
import ArticleList from './ArticleList';
import { useState } from 'react';
import useToggle from '@/hooks/useToggle';
import styles from './ArticleSection.module.scss';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Button from '../@shared/Button';

const ArticleManagement = dynamic(() => import('./ArticleManagement'), {
  ssr: false,
});

interface ArticleSectionProps {
  initialArticleList: IArticle[];
}

function ArticleSection({ initialArticleList }: ArticleSectionProps) {
  const [articleList, setArticleList] = useState(initialArticleList);
  const [orderBy, setOrderBy] = useState<orderType>('recent');
  const [isOpen, toggleIsOpen] = useToggle();

  const handleOrderByClick = async (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const { value } = (event.target as HTMLDivElement).dataset;

    // dataset에 있는 쿼리로 재정렬 요청 후 드롭다운 닫기
    const { list } = await getArticles({ order: value as orderType });
    setArticleList(() => list);
    setOrderBy(value as orderType);
    toggleIsOpen();
  };

  const handleSearchSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const { value } = (event.target as HTMLFormElement)['search'];
    // 작성된 키워드로 검색 요청
    const { list } = await getArticles({ keyword: value });

    setArticleList(() => list);
  };

  const handleDropdownClick = () => {
    toggleIsOpen();
  };

  return (
    <section className={styles.articleSection}>
      <div className={styles.titleAndButton}>
        <h2>게시글</h2>
        <Link href='/'>
          <Button category={'large'}>글쓰기</Button>
        </Link>
      </div>
      <ArticleManagement
        onDropdownClick={handleDropdownClick}
        onSearchSubmit={handleSearchSubmit}
        onOrderByClick={handleOrderByClick}
        isDropdownOpen={isOpen}
        orderBy={orderBy}
      />
      <ArticleList articleList={articleList} />
    </section>
  );
}

export default ArticleSection;
