const BASE_URL = "https://panda-market-api.vercel.app";

export async function getArticles(page: number, pageSize: number, orderBy?: "recent" | "like", keyword?: string) {
  const orderByQuery = orderBy ? `&orderBy=${orderBy}` : '';
  const keywordQuery = keyword ? `&keyword=${keyword}` : '';

  const response = await fetch(`${BASE_URL}/articles?page=${page}&pageSize=${pageSize}${orderByQuery}${keywordQuery}`);
  if(!response.ok) throw new Error("getArticles api 실행중 오류 발생");
  const result = await response.json();

  return result;
}