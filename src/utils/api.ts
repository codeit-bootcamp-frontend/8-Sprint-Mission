const BASE_URL = "https://panda-market-api.vercel.app";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string;
  favoriteCount: number;
  tags?: string[];
  createdAt: string;
}

interface Writer {
  image: string;
  nickname: string;
}

interface ProductComments {
  writer: Writer;
  content: string;
  updatedAt: string;
}

export async function fetchProductData() {
  const url = `${BASE_URL}/products`;
  const response = await fetch(url);

  if (!response || !response.ok) return [];
  const result = await response.json();

  const data = result.list.map((products: Product) => ({
    id: products.id,
    name: products.name,
    description: products.description,
    price: products.price,
    images: products.images,
    favoriteCount: products.favoriteCount,
    createdAt: products.createdAt,
  }));

  return data;
}

export async function fetchProductDataById(productId: string) {
  const url = `${BASE_URL}/products/${productId}`;
  const response = await fetch(url);

  if (!response || !response.ok) return [];
  const result = await response.json();

  return result;
}

export async function fetchProductComment(
  productId: string
): Promise<ProductComments[]> {
  const url = `${BASE_URL}/products/${productId}/comments?limit=10`;
  const response = await fetch(url);

  if (!response || !response.ok) return [];
  const result = await response.json();

  const data = result.list;

  return data;
}
