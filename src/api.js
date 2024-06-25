export async function getProducts({ page, pageSize, order }) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${order}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const body = await response.json();
  return body;
}
