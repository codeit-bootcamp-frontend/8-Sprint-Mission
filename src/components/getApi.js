export async function getApi(size = '4') {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=1&pageSize=${size}&orderBy=favorite`
  );
  const result = await response.json();
  return result;
}

export async function getApiOrderBy({ order = 'recent', lowerSize = '10', page = '1' }) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${lowerSize}&orderBy=${order}`
  );
  const result = await response.json();
  return result;
}

export async function getApiProducts(selectItem) {
  const response = await fetch(`https://panda-market-api.vercel.app/products/${selectItem}`);
  const result = await response.json();
  return result;
}

export async function getApiProductsComments(selectItem) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${selectItem}/comments?limit=10`
  );
  const result = await response.json();
  return result;
}
