export async function getProducts({ order = "createAt" }) {
  const query = `order=${order}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/Products?${query}`
  );
  if (!response.ok) {
    throw new Error("목록을 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
