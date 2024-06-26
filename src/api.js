export async function getProduct(params = {}) {
  const query = new URLSearchParams(params).toString();
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('fetch 에러', error);
  }
}
