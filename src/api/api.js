export async function getProducts(
  pageSize = 0,
  orderBy = "favorite",
  page = 1,
  keyword = ""
) {
  const query = `pageSize=${pageSize}&orderBy=${orderBy}`;
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
