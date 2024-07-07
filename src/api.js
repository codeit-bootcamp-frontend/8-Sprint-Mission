export async function getProducts({
  order = "favoriteCount",
  offset = 0,
  limit = 10,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/Products?${query}`
  );
  if (!response.ok) {
    throw new Error("상품 목록을 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function getProductById(productId) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/Products/${productId}`
  );
  if (!response.ok) {
    throw new Error("상세 페이지를 불러오는 데 실패했습니다.");
  }
  const productData = await response.json();
  return productData;
}

export async function getCommentById(productId) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/Products/${productId}/comments?limit=3`
  );
  if (!response.ok) {
    throw new Error("댓글 목록을 불러오는 데 실패했습니다.");
  }
  const commentData = await response.json();
  return commentData;
}
