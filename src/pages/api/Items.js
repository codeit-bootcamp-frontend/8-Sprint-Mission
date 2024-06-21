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
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}
