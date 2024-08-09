import getArticles, { GetArticlesProps } from '@/apis/getArticles';
import { ARTICLES_QUERY_KEY } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

const INITIAL_PAGE_SIZE = '10';

const useArticlesQuery = ({
  page = '1',
  order = 'recent',
  size = INITIAL_PAGE_SIZE,
  keyword = '',
}: GetArticlesProps) => {
  return useSuspenseQuery({
    queryKey: [ARTICLES_QUERY_KEY, page, order, size, keyword],
    queryFn: () => getArticles({ page, order, size, keyword }),
  });
};

export default useArticlesQuery;
