export async function getApi() {
  // const size =
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=favorite`
  );
  const result = await response.json();
  return result;
}
