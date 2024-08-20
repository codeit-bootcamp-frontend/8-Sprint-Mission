import styles from './boards.module.scss';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import getArticles, { IArticle } from '@/apis/getArticles';
import ArticleSection from '@/components/boards/ArticleSection';
import BestArticleSection from '@/components/boards/BestArticleSection';

export async function getServerSideProps() {
  // 최신순이 기본값
  const { list } = await getArticles({});

  return {
    props: {
      list,
    },
  };
}

export default function Boards({ list }: { list: IArticle[] }) {
  return (
    <div className={styles.boards}>
      <BestArticleSection />
      <ArticleSection initialArticleList={list} />
    </div>
  );
}
