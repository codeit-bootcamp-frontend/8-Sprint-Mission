import styles from './boards.module.scss';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ArticleSection from '@/components/boards/ArticleSection';
import getArticles, { IArticle } from '@/apis/getArticles';

const BestArticleList = dynamic(
  () => import('../components/boards/BestArticleList'),
  { ssr: false }
);

export async function getServerSideProps() {
  const { list } = await getArticles({});

  return {
    props: {
      list,
    },
  };
}

export default function Boards({ list }: { list: IArticle[] }) {
  const queryClient = new QueryClient();

  // TODO: BestArticle, Article을 Link로 감싸서 prefetch 시켜야함
  return (
    <div className={styles.boards}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>...loading</div>}>
          <BestArticleList />
        </Suspense>
      </QueryClientProvider>
      <ArticleSection initialArticleList={list} />
    </div>
  );
}
