import getArticles, { IArticle, orderType } from '@/apis/getArticles';
import ArticleList from './ArticleList';
import { useState } from 'react';
import useToggle from '@/hooks/customs/useToggle';
import styles from './ArticleSection.module.scss';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Button from '../@shared/Button';
import ArticleManagement from './ArticleManagement';

interface ArticleSectionProps {
  initialArticleList: IArticle[];
}

function ArticleSection({ initialArticleList }: ArticleSectionProps) {
  const [articleList, setArticleList] = useState(initialArticleList); // SSR로 받아온 게시글 리스트 초깃값

  const handleOrderByClick = async (orderBy: string) => {
    const { list } = await getArticles({ order: orderBy as orderType }); // dataset에 있는 쿼리로 재정렬 요청 후 드롭다운 닫기
    setArticleList(() => list);
  };

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value } = (event.target as HTMLFormElement)['search'];
    const { list } = await getArticles({ keyword: value }); // 작성된 키워드로 검색 요청
    setArticleList(() => list);
  };

  return (
    <section className={styles.articleSection}>
      <div className={styles.titleAndButton}>
        <h2>게시글</h2>
        <Link href='/'>
          <Button category={'large'}>글쓰기</Button>
        </Link>
      </div>
      <ArticleManagement onSearchSubmit={handleSearchSubmit} onOrderByClick={handleOrderByClick} />
      <ArticleList articleList={articleList} />
    </section>
  );
}

export default ArticleSection;
