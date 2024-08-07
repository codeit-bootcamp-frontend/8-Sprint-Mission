const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts(params: Record<string, any> = {}) {
  try {
    const query = new URLSearchParams(params as any).toString();

    const response = await fetch(`${BASE_URL}/products?${query}`);

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
}

export async function getProductDetail(productId: number) {
  if (!productId) {
    throw new Error("Invalid product ID");
  }

  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch product detail:", error);
    throw error;
  }
}

export interface GetProductCommentsParams {
  productId: number;
  params?: {
    limit?: number;
    offset?: number;
    [key: string]: any;
  };
}

export async function getProductComments({
  productId,
  params,
}: GetProductCommentsParams) {
  if (!productId) {
    throw new Error("Invalid product ID");
  }

  try {
    const query = new URLSearchParams(params as any).toString();
    const response = await fetch(
      `${BASE_URL}/products/${productId}/comments?${query}`
    );
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch product comments:", error);
    throw error;
  }
}
