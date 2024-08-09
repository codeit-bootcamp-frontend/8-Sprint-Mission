import getArticles, { IArticle, orderType } from '@/apis/getArticles';
import ArticleList from './ArticleList';
import { useState } from 'react';
import useToggle from '@/hooks/useToggle';
import useWindowSize from '@/hooks/useWindowSize';
import ArticleManagement from './ArticleManagement';

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
    <>
      <ArticleManagement
        onIsOpenClick={handleIsOpenClick}
        onSearchSubmit={handleSearchSubmit}
        onOrderByClick={handleOrderByClick}
        isDropdownOpen={isOpen}
        orderBy={orderBy}
      />
      <ArticleList articleList={articleList} />
    </>
  );
}

export default ArticleSection;
