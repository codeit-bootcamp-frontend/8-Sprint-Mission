import { GetProductsProps } from '@type/product.types';

export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (params: GetProductsProps) => [...productKeys.lists(), params] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (productId: number) => [...productKeys.details(), productId] as const,
};
