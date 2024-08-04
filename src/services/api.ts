import { FetchError, Product, Comment } from "../types/apiTypes";
const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`${BASE_URL}/products?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

export async function getProductById(productId: number): Promise<Product> {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw error;
  }
}

export async function getInquery(productId: number): Promise<Comment[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/products/${productId}/comments?limit=100`
    );
    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(`HTTP error: ${response.status}, ${errorBody.message}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch comments:", error);
    throw error;
  }
}
