export async function getAllProduct({ query }) {
  const { currentPage, order, size, keyword } = query;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=${currentPage}&orderBy=${order}&pageSize=${size}&keyword=${keyword}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  const data = await response.json();
  return data;
}

export async function getFavoriteProduct({ query }) {
  const { size } = query;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?&orderBy=favorite&pageSize=${size}`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return data;
}
