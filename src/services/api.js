export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}

export async function getProductById(productId) {
  try {
    const response = await fetch(`https://panda-market-api.vercel.app/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw error;
  }
}

export async function getInquery(productId) {
  try {
    const response = await fetch(`https://panda-market-api.vercel.app/products/${productId}/comments?limit=100`);
    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(`HTTP error: ${response.status}, ${errorBody.message}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error('Failed to fetch comments:', error);
    throw error;
  }
}
