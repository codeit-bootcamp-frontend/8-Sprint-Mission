import styles from './boards.module.scss';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import getArticles, { IArticle } from '@/apis/getArticles';
import Link from 'next/link';
import Button from '@/components/@shared/Button';

const BestArticleList = dynamic(
  () => import('../components/boards/BestArticleList'),
  { ssr: false }
);

const ArticleSection = dynamic(
  () => import('../components/boards/ArticleSection'),
  { ssr: false }
);

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
  const queryClient = new QueryClient();

  // TODO: BestArticle, Article을 Link로 감싸서 prefetch 시켜야함
  return (
    <div className={styles.boards}>
      <QueryClientProvider client={queryClient}>
        <div className={styles.bestArticleSection}>
          <h2>베스트 게시글</h2>
          <Suspense fallback={<div>...loading</div>}>
            <BestArticleList />
          </Suspense>
        </div>
        <div>
          <div className={styles.titleAndButton}>
            <h2>게시글</h2>
            <Link href='/'>
              <Button category={'large'}>글쓰기</Button>
            </Link>
          </div>
          <Suspense fallback={<div>...loading</div>}>
            <ArticleSection initialArticleList={list} />
          </Suspense>
        </div>
      </QueryClientProvider>
    </div>
  );
}
