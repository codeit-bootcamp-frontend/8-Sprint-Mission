import { dehydrate, QueryClient } from '@tanstack/react-query';

import { Boards } from '@/b_pages/boards';
import { getBoards } from '@/entities/articles';

const queryClient = new QueryClient();

export const getServerSideProps = async () => {
  await queryClient.prefetchQuery({
    queryKey: ['allBoards'],
    queryFn: () => getBoards({ page: 1, pageSize: 10, orderBy: 'recent' }),
  });
  await queryClient.prefetchQuery({
    queryKey: ['bestBoards'],
    queryFn: () => getBoards({ page: 1, pageSize: 3, orderBy: 'like' }),
  });
  return {
    props: {
      dehydratedProps: dehydrate(queryClient),
    },
  };
};

const BoardsPage = () => {
  return (
    <>
      <Boards />
    </>
  );
};

export default BoardsPage;
