import ArticleList from '@/components/boards/ArticleList';
import styles from './boards.module.scss';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const BestArticleList = dynamic(
  () => import('../components/boards/BestArticleList'),
  { ssr: false }
);

export default function Boards() {
  const queryClient = new QueryClient();
  return (
    <div className={styles.boards}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>...loading</div>}>
          <BestArticleList />
        </Suspense>
      </QueryClientProvider>
      <ArticleList />
    </div>
  );
}
