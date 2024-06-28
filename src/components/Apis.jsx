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
    console.log(err, "패치에러요");
  }
};

export { getItems };
