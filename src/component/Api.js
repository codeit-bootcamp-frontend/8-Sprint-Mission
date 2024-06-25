export async function Api() {
  const response = await fetch("https://panda-market-api.vercel.app/products");
  const body = await response.json();
  return body;
}
