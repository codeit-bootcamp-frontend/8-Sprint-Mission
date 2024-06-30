export async function getProducts({ page, pageSize, order }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${order}`;
  const response = await fetch(`${apiUrl}.vercel.app/products?${query}`);
  const body = await response.json();
  return body;
}
