export async function getItems({ page, pageSize, orderBy }) {
  const query = new URLSearchParams({ page, pageSize, orderBy }).toString();
  const BASE_URL = "https://panda-market-api.vercel.app";

  try {
    const response = await fetch(`${BASE_URL}/products?${query}`);
    const itemData = await response.json();
    return itemData;
  } catch (error) {
    console.error("리퀘스트 실패:", error);
    throw error;
  }
}
