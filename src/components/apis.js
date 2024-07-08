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
    const responseInfo = await fetch(`${BASE_URL}/products/${id}`);
    const itemInfo = await responseInfo.json();
    return itemInfo;
  } catch (err) {
    console.log("패치에러", err);
  }
};

const getItemComments = async (id, limit = 3) => {
  try {
    const responseComments = await fetch(
      `${BASE_URL}/products/${id}/comments?limit=${limit}`
    );
    const itemComments = await responseComments.json();
    return itemComments;
  } catch (err) {
    console.log("패치에러", err);
  }
};

export { getItems, getItemInfo, getItemComments };
