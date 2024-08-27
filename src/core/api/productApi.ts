import { Product } from "core/dtos/productDTO";
import { getFromApi, BASE_URL } from "./apiService";

// 전체 제품 가져오기
interface GetProductsParams {
  page: string;
  pageSize: string;
  orderBy: string;
}

export async function getProducts(params: GetProductsParams) {
  const query = new URLSearchParams({
    page: params.page,
    pageSize: params.pageSize,
    orderBy: params.orderBy,
  }).toString();
  const url = `${BASE_URL}/products?${query}`;
  return getFromApi<any>(url);
}

// 특정 제품 가져오기
interface GetProductIdParams {
  productId: number;
}

export async function getProductId({
  productId,
}: GetProductIdParams): Promise<Product> {
  const url = `${BASE_URL}/products/${productId}`;
  return getFromApi<Product>(url);
}
