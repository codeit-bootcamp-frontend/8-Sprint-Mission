const BASE_URL = "https://panda-market-api.vercel.app";

interface Comment {
  id: number;
  productId: number;
  content: string;
  author: string;
  createdAt: string;
}

interface GetProductsParams {
  order?: string;
  page?: number;
  pageSize: number;
}

export async function getProducts({
  order = "recent",
  page = 1,
  pageSize,
}: GetProductsParams) {
  const query = `orderBy=${order}`;
  const response = await fetch(
    `${BASE_URL}/products?${query}&page=${page}&pageSize=${pageSize}`
  );
  const body = await response.json();
  return body;
}

export async function getProduct(productSlug: string) {
  const response = await fetch(`${BASE_URL}/products/${productSlug}`);
  const body = await response.json();
  return body;
}

export async function getComment(productSlug: string) {
  const response = await fetch(
    `${BASE_URL}/products/${productSlug}/comments?limit=10`
  );
  const body = await response.json();
  return body;
}

export async function createProducts(formData: FormData) {
  const response = await fetch(`${BASE_URL}/products?`, {
    method: "POST",
    body: formData,
  });
  const body = await response.json();
  return body;
}
