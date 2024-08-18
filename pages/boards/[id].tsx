import AllArticlesBoard from '@components/board/AllArticlesBoard/AllArticlesBoard';
import BestArticlesSection from '@components/board/BestArticlesSection/BestArticlesSection';
import BasicLayout from '@components/layout/BasicLayout/BasicLayout';
import { getArticle, getArticles } from '@lib/api/articleApi';
import { Article } from '@type/ArticleTypes';
import { error } from 'console';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  getArticle({ articleId: Number(id) })
    .then((res) => {
      return {
        props: {
          initArticle: res?.data,
        },
      };
    })
    .catch((error) => {
      return {
        props: {
          initArticle: {},
        },
      };
    });
  return {
    props: {
      initArticle: {},
    },
  };
};

type BoardDetailPageProps = {
  initArticle: Article;
};

const BoardDetailPage = ({ initArticle }: BoardDetailPageProps) => {
  return (
    <>
      <BasicLayout>
        {/* <AllArticlesBoard initArticle={initArticle} /> */}
      </BasicLayout>
    </>
  );
};

export default BoardDetailPage;
