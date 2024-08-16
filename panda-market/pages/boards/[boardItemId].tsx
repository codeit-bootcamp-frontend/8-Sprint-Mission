import { BoardDetail } from '@/b_pages/boardDetail';
import { Article } from '@/entities';
import { getBoardDetail } from '@/entities/articles/getBoardDetail';
import { BoardDetailContext } from '@/f_shared/config';
import { GetServerSidePropsContext } from 'next';

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { boardItemId } = context.query;
  const data = await getBoardDetail({ boardItemId: `${boardItemId}` });
  return {
    props: {
      data,
    },
  };
};

interface BoardItemDetailProps {
  data: Article;
}

const BoardItemDetailPage = ({ data }: BoardItemDetailProps) => {
  return (
    <BoardDetailContext.Provider value={data}>
      <BoardDetail />
    </BoardDetailContext.Provider>
  );
};

export default BoardItemDetailPage;
