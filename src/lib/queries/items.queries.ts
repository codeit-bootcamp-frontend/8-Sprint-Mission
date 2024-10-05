import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProducts, getProductById, createProduct } from '@lib/api/items.api';
import {
  ProductListResponse,
  Product,
  GetProductsProps,
  CreateProductRequest,
  CreateProductResponse,
} from '@type/product.types';
import { productKeys } from './keys/\bitems.keys';

export const useProducts = (params: GetProductsProps) => {
  return useQuery<ProductListResponse>({
    queryKey: productKeys.list(params),
    queryFn: () =>
      getProducts({
        order: params.order,
        page: params.page,
        pageSize: params.pageSize,
        keyword: params.keyword ?? '',
      }),
  });
};

export const useProduct = (productId: number) => {
  return useQuery<Product, Error>({
    queryKey: productKeys.detail(productId),
    queryFn: () => getProductById(productId),
  });
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateProductResponse, Error, CreateProductRequest>({
    mutationFn: (newProduct) => createProduct(newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
};
