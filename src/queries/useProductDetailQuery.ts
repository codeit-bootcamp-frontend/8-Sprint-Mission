import { PRODUCTS_QUERY_KEY } from ' constants/queryKeys/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { axiosInstance } from 'apis/setupAxios';

interface IProductDetail {
  createdAt: string;
  description: string;
  favoriteCount: number;
  id: number;
  images: string[];
  isFavorite: boolean;
  name: string;
  ownerId: number;
  price: number;
  tags: string[];
  updatedAt: string;
}

const fetcher = async (id: string | undefined): Promise<IProductDetail | null> => {
  if (!id) return null;

  try {
    const { data } = await axiosInstance.get(`/${PRODUCTS_QUERY_KEY}/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const useProductDetailQuery = (productId: string | undefined) => {
  return useSuspenseQuery({
    queryKey: [PRODUCTS_QUERY_KEY, productId],
    queryFn: () => fetcher(productId),
  });
};

export default useProductDetailQuery;
