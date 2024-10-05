import AllArticlesBoard from '@components/board/AllArticlesBoard/AllArticlesBoard';
import BestArticlesSection from '@components/board/BestArticlesSection/BestArticlesSection';
import BasicLayout from '@components/layout/BasicLayout/BasicLayout';
import { getArticles } from '@lib/api/article.api';
import { Article } from '@type/ArticleTypes';
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
    <BasicLayout>
      <BestArticlesSection />
      <AllArticlesBoard initArticles={initArticles} />
    </BasicLayout>
  );
};

export default BoardPage;
