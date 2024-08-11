import { ArticleResponse, GetArticleRequest } from '@/entities/articles';
import { getBoards } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetAllBoards = ({
  page,
  pageSize,
  orderBy,
}: Omit<GetArticleRequest, 'keyword'>) => {
  return useQuery<ArticleResponse>({
    queryKey: ['allBoards'],
    queryFn: () =>
      getBoards({
        page,
        pageSize,
        orderBy,
      }),
  });
};
