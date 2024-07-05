const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts({ page, pageSize, orderBy }) {
  const query = new URLSearchParams({ page, pageSize, orderBy }).toString();

  try {
    const response = await fetch(`${BASE_URL}/products?${query}`);
    const itemData = await response.json();
    return itemData;
  } catch (error) {
    console.error("getProducts 리퀘스트 실패:", error);
    throw error;
  }
}

export async function getProductId({ productId }) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const itemData = await response.json();
    return itemData;
  } catch (error) {
    console.error("getProductId 리퀘스트 실패:", error);
    throw error;
  }
}

export async function getProductComments({ productId, limit = 3 }) {
  const query = new URLSearchParams({ limit }).toString();

  try {
    const response = await fetch(
      `${BASE_URL}/products/${productId}/comments?${query}`
    );
    const itemData = await response.json();
    return itemData;
  } catch (error) {
    console.error("getProductComments 리퀘스트 실패:", error);
    throw error;
  }
}
