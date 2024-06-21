export async function getProducts({ pageSize, order }) {
  const query = `pageSize=${pageSize}&orderBy=${order}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=1&${query}`
  );
  const body = await response.json();
  return body;
}
