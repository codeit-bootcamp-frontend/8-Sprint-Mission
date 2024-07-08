const BASE_URL = process.env.REACT_APP_BASE_URL;

/** 상품 정보를 읽는 함수
 * @param {number} [params.page] - 페이지 번호 (선택)
 * @param {number} [params.pageSize] - 페이지 당 상품 수 (선택)
 * @param {string} [params.orderBy] - 정렬 기준 (선택)
 * @param {string} [params.keyword] - 검색 키워드 (선택)
 *
 * @returns {Promise<Object>} - 상품 데이터를 포함한 Promise 객체
 * @throws {Error} - 요청이 실패한 경우 오류 발생
 */
export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`${BASE_URL}/products?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch:", error);
    throw error;
  }
}
