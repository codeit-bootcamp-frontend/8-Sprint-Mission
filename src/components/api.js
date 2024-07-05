const BASE_URL = "https://panda-market-api.vercel.app";

export async function fetchProductData() {
  const url = `${BASE_URL}/products`;
  const response = await fetch(url);

  if (!response || !response.ok) return [];
  const result = await response.json();

  const data = result.list.map((products) => ({
    id: products.id,
    name: products.name,
    description: products.description,
    price: products.price,
    image: products.images,
    favoriteCount: products.favoriteCount,
    createdAt: products.createdAt,
  }));

  return data;
}

export async function fetchProductDataWithId(productId) {
  const url = `${BASE_URL}/products/${productId}`;
  const response = await fetch(url);

  if (!response || !response.ok) return [];
  const result = await response.json();

  return result;
}
