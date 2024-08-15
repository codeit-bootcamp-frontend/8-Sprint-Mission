import { useQuery } from '@tanstack/react-query';
import {
  ArticleResponse,
  GetArticleRequest,
  getBoards,
} from '@/entities/articles';

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
