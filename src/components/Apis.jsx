const getItems = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyWord = "",
}) => {
  console.log(keyWord);
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${
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
