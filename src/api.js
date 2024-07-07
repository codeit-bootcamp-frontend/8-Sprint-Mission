// 상품 API
export async function getProducts({
  page = 1,
  pageSize = 20,
  order = "recent",
}) {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${order}`;
  const response = await fetch(`${apiUrl}.vercel.app/products?${query}`);
  const body = await response.json();
  return body;
}

// 댓글 API
export async function getComments({ productId, limit = 3 }) {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const query = `${productId}/comments?limit=${limit}`;
  const response = await fetch(`${apiUrl}.vercel.app/products/${query}`);
  const body = await response.json();
  return body;
}
