/* export async function getProducts() {
  const response = await fetch(`https://panda-market-api.vercel.app/Products`);
  const body = await response.json();
  const product = body.list;
  return product;
} */

export async function getProducts({
  order = "favoriteCount",
  offset = 0,
  limit = 10,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/Products?${query}`
  );
  if (!response.ok) {
    throw new Error("리뷰를 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
