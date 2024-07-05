import { PRODUCTS_QUERY_KEY } from ' constants/queryKeys/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { axiosInstance } from 'apis/setupAxios';
import { useSearchParams } from 'react-router-dom';
import { IProductResponse, ProductOrderByType } from 'types/@shared/marketTypes';

const INITIAL_PAGE_SIZE = 10;

interface useProductsQueryFetcherProps {
  page?: string | null;
  order?: ProductOrderByType;
  keyword?: string;
  size?: number;
}

const fetcher = async ({ page, order, size, keyword }: useProductsQueryFetcherProps): Promise<IProductResponse> => {
  try {
    const { data } = await axiosInstance.get(
      `/${PRODUCTS_QUERY_KEY}?page=${page}&pageSize=${size}&orderBy=${order}&keyword=${keyword}`,
    );

    const { list, totalCount } = data;

    return { list, totalCount };
  } catch (error) {
    console.log(error);
    return { list: [], totalCount: 0 };
  }
};

const useProductsQuery = ({
  order = 'recent',
  size = INITIAL_PAGE_SIZE,
  keyword = '',
}: useProductsQueryFetcherProps) => {
  const [serchParams] = useSearchParams(); // 현재 페이지 번호
  const currentPage = serchParams.get('page');

  return useSuspenseQuery({
    queryKey: [PRODUCTS_QUERY_KEY, currentPage, order, size, keyword],
    queryFn: () => fetcher({ page: currentPage || '1', order, size, keyword }),
  });
};

export default useProductsQuery;
