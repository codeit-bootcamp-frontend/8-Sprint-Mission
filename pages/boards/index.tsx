import AllArticlesBoard from '@/src/components/board/AllArticlesBoard/AllArticlesBoard';
import BestArticlesSection from '@/src/components/board/BestArticlesSection/BestArticlesSection';
import BasicLayout from '@/src/components/layout/BasicLayout/BasicLayout';
import { getArticles } from '@/src/lib/api/articleApi';
import { Article } from '@/src/types/ArticleTypes';
import { error } from 'console';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  getArticles({ keyword: '', orderBy: 'recent', page: 1, pageSize: 10 })
    .then((res) => {
      return {
        props: {
          initArticles: res?.data.list,
        },
      };
    })
    .catch((error) => {
      return {
        props: {
          initArticles: [],
        },
      };
    });
  return {
    props: {
      initArticles: [],
    },
  };
};

type BoardPageProps = {
  initArticles: Article[];
};

const BoardPage = ({ initArticles }: BoardPageProps) => {
  return (
    <>
      <BasicLayout>
        <BestArticlesSection />
        <AllArticlesBoard initArticles={initArticles} />
      </BasicLayout>
    </>
  );
};

export default BoardPage;
