import { PRODUCTS_QUERY_KEY } from ' constants/queryKeys/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { axiosInstance } from 'apis/setupAxios';
import { IProductResponse } from 'types/@shared/marketTypes';

interface useProductsQueryFetcherProps {
  page: number;
  order: string;
  keyword: string;
  size: number;
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

//TODO: size 상수화
const useProductsQuery = ({ page = 1, order = 'recent', size = 10, keyword = '' }) => {
  return useSuspenseQuery({
    queryKey: [PRODUCTS_QUERY_KEY, page, order, size, keyword],
    queryFn: () => fetcher({ page, order, size, keyword }),
  });
};

export default useProductsQuery;
