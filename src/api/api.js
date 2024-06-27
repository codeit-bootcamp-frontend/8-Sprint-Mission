const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts(orderBy, page = "1", pageSize = "10") {
  const query = `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
  const url = `${BASE_URL}/products?${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `상품정보를 불러오는데 실패했습니다. Status: ${response.status}`
      );
    }
    const body = await response.json();
    return body;
  } catch (error) {
    throw new Error(`상품정보 요청에 실패했습니다. Error: ${error.message}`);
  }
}
