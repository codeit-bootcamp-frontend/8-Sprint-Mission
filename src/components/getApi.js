export async function getApi() {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=favorite`
  );
  const result = await response.json();
  return result;
}

export async function getApiOrderBy(orderBy = 'recent') {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=${orderBy}`
  );
  const result = await response.json();
  return result;
}
