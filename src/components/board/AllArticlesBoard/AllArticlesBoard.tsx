import styles from './AllArticlesBoard.module.scss';

import SectionTitle from '@/src/core/ui/SectionTitle/SectionTitle';
import UButton from '@/src/core/ui/buttons/UButton/UButton';
import ArticleSearchBar from '../ArticleSearchBar/ArticleSearchBar';
import UDropdown from '@/src/core/ui/dropdowns/UDropdown/UDropdown';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Article, ArticleOrderBy } from '@/src/types/ArticleTypes';
import { getArticles } from '@/src/lib/api/articleApi';
import BasicArticleCard from '../BasicArticleCard/BasicArticleCard';

type AllArticlesBoardProps = { initArticles: Article[] };

const AllArticlesBoard = ({ ...props }: AllArticlesBoardProps) => {
  const [orderBy, setOrderBy] = useState<ArticleOrderBy>('recent');
  const [articles, setArticles] = useState<Article[]>(props.initArticles);

  const router = useRouter();
  const keyword = (router.query.q as string) || '';

  const handleSortSelection = (sortOption: string) => {
    setOrderBy(sortOption as ArticleOrderBy);
  };

  const handleSearch = (searchKeyword: string) => {
    const query = { ...router.query };
    if (searchKeyword.trim()) {
      query.q = searchKeyword;
    } else {
      delete query.q;
    }
    router.replace({
      pathname: router.pathname,
      query,
    });
  };

  useEffect(() => {
    getArticles({
      keyword: keyword.trim(),
      orderBy: orderBy,
      page: 1,
      pageSize: 10,
    }).then((res) => {
      if (res?.status === 200) {
        setArticles(res.data.list);
      }
    });
  }, [orderBy, keyword]);

  return (
    <>
      <div className={styles['header']}>
        <SectionTitle title="게시글" />
        <UButton children={'글쓰기'} type="box" handleClick={() => {}} />
      </div>
      <div className={styles['searchBar']}>
        <ArticleSearchBar onSearch={handleSearch} />
        <UDropdown
          onSortSelection={handleSortSelection}
          options={[
            { key: 'recent', value: '최신순' },
            { key: 'like', value: '인기순' },
          ]}
        />
      </div>
      <div className={styles['articleList']}>
        {articles.length
          ? articles.map((article) => (
              <BasicArticleCard key={article.id} article={article} />
            ))
          : keyword && <p>검색된 결과가 없습니다.</p>}
      </div>
    </>
  );
};

export default AllArticlesBoard;
