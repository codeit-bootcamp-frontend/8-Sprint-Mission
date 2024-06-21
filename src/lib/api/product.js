const BASE_URL = "https://panda-market-api.vercel.app/";

const fetchProduct = async ({
  currentPage = 1,
  pageSize = 12,
  orderBy = "recent",
  searchKeyword = "",
}) => {
  const productUrl = BASE_URL + "products";
  const requestUrl = `${productUrl}?page=${currentPage}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${searchKeyword}`;

  const response = await fetch(requestUrl, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("데이터를 로드하는데 실패하였습니다.");
  }
  const body = response.json();
  return body;
};

export default fetchProduct;
