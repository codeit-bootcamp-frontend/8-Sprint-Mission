import {
  CreateProductRequest,
  CreateProductResponse,
  ProductListResponse,
} from '@type/product.types';

const BASE_URL = 'https://panda-market-api.vercel.app';

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

  const response = await fetch(`${BASE_URL}/products?${query}`);
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  return await response.json();
}

/**
 * 상품 상세 조회
 * @param {number} productId 상품 번호 
 * @returns json. ex)
 * {
  "createdAt": "2024-07-05T04:42:58.556Z",
  "favoriteCount": 0,
  "ownerId": 1,
  "images": [
    "https://example.com/..."
  ],
  "tags": [
    "전자제품"
  ],
  "price": 0,
  "description": "string",
  "name": "상품 이름",
  "id": 1,
  "isFavorite": true
}
 */
export async function getProductById(productId = 0) {
  const param = `${productId}`;
  const response = await fetch(`${BASE_URL}/products/${param}`);
  const body = await response.json();
  return body;
}

export async function getCommentsByProductId(
  productId = 0,
  limit = 1,
  nextCursor: string
) {
  const param = `${productId}`;
  let query = `?limit=${limit}`;
  if (nextCursor) query += `&cursor=${nextCursor}`;
  const response = await fetch(
    `${BASE_URL}/products/${param}/comments${query}`
  );
  const body = await response.json();
  return body;
}

/**
 * 상품 등록
 * @param {CreateProductRequest} productData - 등록할 상품 데이터
 * @returns {Promise<CreateProductResponse>} 등록된 상품 정보
 */
export async function createProduct(
  productData: CreateProductRequest
): Promise<CreateProductResponse> {
  const response = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error('상품 등록에 실패했습니다');
  }

  return await response.json();
}
