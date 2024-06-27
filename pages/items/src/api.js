export async function getProducts() {
  const response = await fetch(`https://panda-market-api.vercel.app/Products`);
  const body = await response.json();
  const product = body.list;
  return product;
}
