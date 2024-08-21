import ArticleCommentForm from '@components/board/ArticleCommentForm/ArticleCommentForm';
import ArticleSection from '@components/board/ArticleSection/ArticleSection';
import BasicLayout from '@components/layout/BasicLayout/BasicLayout';
import { getArticle } from '@lib/api/articleApi';
import { Article, ArticleDetailResponse } from '@type/ArticleTypes';
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
  initArticle: ArticleDetailResponse;
};

const BoardDetailPage = ({ initArticle }: BoardDetailPageProps) => {
  return (
    <>
      <BasicLayout>
        <ArticleSection article={initArticle} />
        <ArticleCommentForm articleId={initArticle.id} />
      </BasicLayout>
    </>
  );
};

export default BoardDetailPage;
