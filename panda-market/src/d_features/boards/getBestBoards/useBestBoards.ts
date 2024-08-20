import { ArticleResponse, GetArticleRequest } from '@/entities/articles';
import { getBoards } from '@/entities/articles';
import { useQuery } from '@tanstack/react-query';

export const useBestBoards = ({
  pageSize,
}: Pick<GetArticleRequest, 'pageSize'>) => {
  return useQuery<ArticleResponse>({
    queryKey: ['bestBoards'],
    queryFn: () =>
      getBoards({
        orderBy: 'like',
        page: 1,
        pageSize,
      }),
  });
};
