import styles from './BestArticlesSection.module.scss';

import BestArticleCard from '../BestArticleCard/BestArticleCard';
import useViewport from '@/src/lib/hooks/useViewport';
import { useEffect, useState } from 'react';
import { Article } from '@/src/types/ArticleTypes';
import { getArticles } from '@/src/lib/api/articleApi';
import SectionTitle from '@/src/core/ui/SectionTitle/SectionTitle';

const getPageSize = (width: number) => {
  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 3;
  }
};

const BestArticlesSection = ({}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageSize, setPageSize] = useState<number | null>(null);

  const viewportWidth = useViewport();

  useEffect(() => {
    if (viewportWidth === 0) return;
    const newPageSize = getPageSize(viewportWidth);
    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
      if (newPageSize)
        getArticles({
          page: 1,
          pageSize: newPageSize,
          orderBy: 'like',
          keyword: '',
        }).then((res) => {
          if (res?.status === 200) setArticles(res?.data.list);
        });
    }
  }, [viewportWidth, pageSize]);

  return (
    <>
      <SectionTitle title="베스트 게시글" />
      <div className={styles['list']}>
        {articles.map((article) => {
          return <BestArticleCard key={article.id} article={article} />;
        })}
      </div>
    </>
  );
};

export default BestArticlesSection;
