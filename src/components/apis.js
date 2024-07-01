const getItems = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyWord = "",
}) => {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${
        keyWord ? `&keyword=${keyWord}` : ""
      }`
    );
    const items = await response.json();
    return items;
  } catch (err) {
    console.log(err);
  }
};

const getItemInfo = async (id) => {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${id}`
    );
    const itemInfo = await response.json();
    return itemInfo;
  } catch (err) {
    console.log(err);
  }
};

export { getItems, getItemInfo };
