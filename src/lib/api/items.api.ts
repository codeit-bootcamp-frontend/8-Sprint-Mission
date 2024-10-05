import {
  CreateProductRequest,
  CreateProductResponse,
  ProductListResponse,
} from '@type/product.types';
import { axiosInstance } from './axios';

/**
 * 상품 목록 조회
 * @param {Object} params - 조회 매개변수
 * @param {string} params.order - 정렬 기준: recent, favorite
 * @param {number} params.page - 페이지 번호
 * @param {number} params.pageSize - 페이지 당 상품 수
 * @param {string} params.keyword - 검색 키워드
 * @returns {Promise<ProductListResponse>} 상품 목록 응답
 */
export async function getProducts({
  order,
  page,
  pageSize,
  keyword,
}: {
  order: string;
  page: number;
  pageSize: number;
  keyword: string;
}): Promise<ProductListResponse> {
  const query = new URLSearchParams({
    orderBy: order,
    page: page.toString(),
    pageSize: pageSize.toString(),
    keyword,
  }).toString();

  const response = await axiosInstance.get(`/products?${query}`);
  return response.data;
}

/**
 * 상품 상세 조회
 * @param {number} productId 상품 번호
 */
export async function getProductById(productId = -1) {
  const response = await axiosInstance.get(`/products/${productId}`);
  return response.data;
}

export async function getCommentsByProductId(
  productId: number,
  limit = 1,
  nextCursor?: number
) {
  const response = await axiosInstance.get(
    `/products/${productId}/comments?limit=${limit}${nextCursor ? `&cursor=${nextCursor}` : ''}`
  );
  return response.data;
}

/**
 * 상품 등록
 * @param {CreateProductRequest} productData - 등록할 상품 데이터
 * @returns {Promise<CreateProductResponse>} 등록된 상품 정보
 */
export async function createProduct(
  productData: CreateProductRequest
): Promise<CreateProductResponse> {
  const response = await axiosInstance.post('/products', productData);
  return response.data;
}
