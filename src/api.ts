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

interface GetComments {
  productId: string | undefined;
  commentLimit: number;
}

// 댓글 API
export async function getComments({
  productId,
  commentLimit = 3,
}: GetComments) {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const query = `${productId}/comments?limit=${commentLimit}`;
  const response = await fetch(`${apiUrl}.vercel.app/products/${query}`);
  const body = await response.json();
  return body;
}
