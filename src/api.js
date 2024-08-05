const API_BASE_URL = "https://panda-market-api.vercel.app/";

export async function getProducts({
  orderBy = "recent",
  page = 1,
  pageSize = 10,
}) {
  const query = `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
  const response = await fetch(`${API_BASE_URL}Products?${query}`);
  if (!response.ok) {
    throw new Error("상품 목록을 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function getProductById(productId) {
  const response = await fetch(`${API_BASE_URL}Products/${productId}`);
  if (!response.ok) {
    throw new Error("상세 페이지를 불러오는 데 실패했습니다.");
  }
  const productData = await response.json();
  return productData;
}

export async function getCommentById(productId) {
  const response = await fetch(
    `${API_BASE_URL}Products/${productId}/comments?limit=3`
  );
  if (!response.ok) {
    throw new Error("댓글 목록을 불러오는 데 실패했습니다.");
  }
  const commentData = await response.json();
  return commentData;
}
