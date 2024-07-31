const BASE_URL = `https://panda-market-api.vercel.app`;

export const getProduct = async (id: number) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error("getProduct 요청에 실패했습니다.");
  }
  const result = await response.json();
  return result;
};
