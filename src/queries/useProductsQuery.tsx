import { PRODUCTS_QUERY_KEY } from ' constants/queryKeys/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { axiosInstance } from 'apis/setupAxios';
import { IProductResponse } from 'types/productTypes';

const fetcher = async (page: string, order: string, size: string, keyword: string): Promise<IProductResponse> => {
  try {
    const { data } = await axiosInstance.get(
      `/${PRODUCTS_QUERY_KEY}?page=${page}&pageSize=${size}&orderBy=${order}&keyword=${keyword}`,
    );

    const { list, totalCount } = data;
    return { list, totalCount };
  } catch (error) {
    console.log(error);
    return { list: [], totalCount: null };
  }
};

const useProductsQuery = ({ page = '1', order = 'recent', size = '10', keyword = '' }) => {
  return useSuspenseQuery({
    queryKey: [PRODUCTS_QUERY_KEY, order],
    queryFn: () => fetcher(page, order, size, keyword),
  });
};

export default useProductsQuery;
