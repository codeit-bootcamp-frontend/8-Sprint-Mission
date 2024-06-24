export async function getItems({ page, pageSize, orderBy }) {
  const query = new URLSearchParams({ page, pageSize, orderBy }).toString();

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    );
    const itemData = await response.json();
    console.log("리스폰스:", itemData);
    return itemData;
  } catch (error) {
    console.error("리퀘스트 실패:", error);
    throw error;
  }
}
