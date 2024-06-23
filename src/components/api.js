async function fetchProductData() {
  const url = "https://panda-market-api.vercel.app/products";
  const response = await fetch(url);

  if (!response || !response.ok) return [];
  const result = await response.json();

  const data = result.list.map((products) => ({
    id: products.id,
    title: products.name,
    description: products.description,
    price: products.price,
    image: products.images,
    favoriteCount: products.favoriteCount,
    createAt: products.createAt,
  }));

  return data;
}

export default fetchProductData;
