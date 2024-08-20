import { GetServerSidePropsContext } from 'next';
import { BoardDetail } from '@/b_pages/boardDetail';
import {
  Article,
  getBoardDetail,
  getBoardComments,
  ArticleCommentsResponse,
} from '@/entities';
import { BoardDetailContext } from '@/f_shared/config';

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { boardItemId } = context.query;
  const boardData = await getBoardDetail({ boardItemId: `${boardItemId}` });
  const boardComments = await getBoardComments({
    articleId: `${boardItemId}`,
    limit: 3,
  });
  console.log(boardComments);
  return {
    props: {
      boardData,
      boardComments,
    },
  };
};

interface BoardItemDetailProps {
  boardData: Article;
  boardComments: ArticleCommentsResponse;
}

const BoardItemDetailPage = ({
  boardData,
  boardComments,
}: BoardItemDetailProps) => {
  return (
    <BoardDetailContext.Provider value={{ boardData, boardComments }}>
      <BoardDetail />
    </BoardDetailContext.Provider>
  );
};

export default BoardItemDetailPage;
