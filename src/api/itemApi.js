export async function getProducts(params = {}) {
  const { productid, comments } = params;
  const query = new URLSearchParams(params).toString();

  try {
    let url = "https://panda-market-api.vercel.app/products";

    if (productid) {
      url += `/${productid}`;
    }

    if (comments && productid) {
      url += `/comments`;
    }

    const response = await fetch(`${url}?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("상품을 불러오는데 실패했습니다.:", error);
    throw error;
  }
}
