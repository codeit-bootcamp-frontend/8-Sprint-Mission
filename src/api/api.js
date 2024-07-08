const PRODUCTS_URL = "https://panda-market-api.vercel.app/products";

export async function getProducts(
  pageSize = 0,
  orderBy = "favorite",
  page = 1,
  keyword = ""
) {
  const query = `pageSize=${pageSize}&orderBy=${orderBy}&page=${page}&keyword=${keyword}`;
  try {
    const response = await fetch(`${PRODUCTS_URL}?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

export async function getDetailProduct({ productId }) {
  try {
    const response = await fetch(`${PRODUCTS_URL}/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("fetch error:", error);
    throw error;
  }
}

export async function getComments({ productId }) {
  try {
    const response = await fetch(
      `${PRODUCTS_URL}/${productId}/comments?limit=5`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("fetch error:", error);
    throw error;
  }
}
