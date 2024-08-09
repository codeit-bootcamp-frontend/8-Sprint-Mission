import { IArticle } from '@/apis/getArticles';
import ArticleList from './ArticleList';
import { useState } from 'react';

interface ArticleSectionProps {
  initialArticleList: IArticle[];
}

function ArticleSection({ initialArticleList }: ArticleSectionProps) {
  const [articleList, setArticleList] = useState(initialArticleList);

  return (
    <>
      <ArticleList articleList={articleList} />
    </>
  );
}

export default ArticleSection;
