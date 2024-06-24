const getItems = async ({ pageSize, orderBy }) => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=1&pageSize=${pageSize}&orderBy=${orderBy}`
  );
  const items = await response.json();
  return items;
};

export { getItems };
