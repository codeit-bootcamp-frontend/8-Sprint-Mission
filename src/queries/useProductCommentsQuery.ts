import { PRODUCT_COMMENTS_QUERY_KEY, PRODUCTS_QUERY_KEY } from ' constants/queryKeys/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { axiosInstance } from 'apis/setupAxios';
import { IProductComment } from 'types/@shared/productInfoTypes';

const INITIAL_COMMENTS_SIZE = 20;

const fetcher = async ({
  productId,
  size,
}: {
  productId: string | undefined;
  size: number;
}): Promise<{ list: IProductComment[]; nextCursor: number | null }> => {
  if (!productId) return { list: [], nextCursor: null };

  try {
    const { data } = await axiosInstance.get(`/${PRODUCTS_QUERY_KEY}/${productId}/${PRODUCT_COMMENTS_QUERY_KEY}`, {
      params: { limit: size },
    });

    const { list, nextCursor } = data;

    return { list, nextCursor };
  } catch (error) {
    console.log(error);
    return { list: [], nextCursor: null };
  }
};

const useProductCommentsQuery = ({
  productId,
  size = INITIAL_COMMENTS_SIZE,
}: {
  productId: string | undefined;
  size?: number;
}) => {
  return useSuspenseQuery({
    queryKey: [PRODUCTS_QUERY_KEY, PRODUCT_COMMENTS_QUERY_KEY, productId, size],
    queryFn: () => fetcher({ productId, size }),
  });
};

export default useProductCommentsQuery;
