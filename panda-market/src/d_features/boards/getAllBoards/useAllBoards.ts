import { ArticleResponse, GetArticleRequest } from '@/entities/articles';
import { getBoards } from '@/f_shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetAllBoards = ({
  page,
  pageSize,
  orderBy,
  keyword,
}: GetArticleRequest) => {
  return useQuery<ArticleResponse>({
    queryKey: ['allBoards', keyword, page, pageSize, orderBy],
    queryFn: () =>
      getBoards({
        page,
        pageSize,
        orderBy,
        keyword,
      }),
  });
};
