const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts({ orderBy, page, pageSize }) {
  const query = `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
  const url = `${BASE_URL}/products?${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `상품목록을 불러오는데 실패했습니다. Status: ${response.status}`
      );
    }
    const body = await response.json();
    return body;
  } catch (error) {
    throw new Error(`상품목록 요청에 실패했습니다. Error: ${error.message}`);
  }
}

export async function getProductDetail({ productId }) {
  const url = `${BASE_URL}/products/${productId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `상품상세정보를 불러오는데 실패했습니다. Status: ${response.status}`
      );
    }
    const body = await response.json();
    return body;
  } catch (error) {
    throw new Error(
      `상품상세정보 요청에 실패했습니다. Error: ${error.message}`
    );
  }
}

export async function getProductComments({ productId, limit }) {
  const query = `limit=${limit}`;
  const url = `${BASE_URL}/products/${productId}/comments?${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `상품댓글정보를 불러오는데 실패했습니다. Status: ${response.status}`
      );
    }
    const body = await response.json();
    return body;
  } catch (error) {
    throw new Error(
      `상품댓글정보 요청에 실패했습니다. Error: ${error.message}`
    );
  }
}