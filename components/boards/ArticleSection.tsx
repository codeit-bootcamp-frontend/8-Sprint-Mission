import getArticles, { IArticle, orderType } from '@/apis/getArticles';
import ArticleList from './ArticleList';
import { useState } from 'react';
import useToggle from '@/hooks/useToggle';
import styles from './ArticleSection.module.scss';
import dynamic from 'next/dynamic';

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
    <section className={styles.articleSection}>
      <ArticleManagement
        onIsOpenClick={handleIsOpenClick}
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
