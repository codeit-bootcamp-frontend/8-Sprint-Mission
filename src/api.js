export async function getProducts({ page, pageSize, orderBy }) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/products?${query}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('fetch 에러', error);
  }
}
