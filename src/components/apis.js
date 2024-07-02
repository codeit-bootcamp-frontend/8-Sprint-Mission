const BASE_URL = "https://panda-market-api.vercel.app";
const getItems = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyWord = "",
}) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${
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
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const itemInfo = await response.json();
    return itemInfo;
  } catch (err) {
    console.log(err);
  }
};

export { getItems, getItemInfo };
