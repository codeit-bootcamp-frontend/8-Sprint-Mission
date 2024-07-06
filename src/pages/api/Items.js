const BASE_URL = 'https://panda-market-api.vercel.app';

/**
 * 상품 목록 조회
 * @param {string} order 정렬 기준: recent, favorite
 * @param {number} page 페이지 번호
 * @param {number} pageSize 페이지 당 상품 수
 * @param {string} keyword 검색 키워드
 * @returns json. ex) {
  "list": [
    {
      "id": 22,
      "name": "ee",
      "description": "eeeeeeeeeeeeeeee",
      "price": 4,
      "tags": [
        "44"
      ],
      "images": [
        "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/210/1718529146905/arrow_left-icon.svg"
      ],
      "ownerId": 210,
      "favoriteCount": 0,
      "createdAt": "2024-06-16T09:12:27.057Z",
      "updatedAt": "2024-06-16T09:12:27.057Z"
    }, ... }
 */
export async function getProducts({
  order, // 정렬 기준: recent, favorite
  page, // 페이지 번호
  pageSize, // 페이지 당 상품 수
  keyword, // 검색 키워드
}) {
  const query = `orderBy=${order}&page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  const response = await fetch(`${BASE_URL}/products?${query}`);
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
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
  nextCursor
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
