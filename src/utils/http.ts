interface Query {
  query: {
    productId?: number;
    currentPage?: number;
    order?: string;
    size?: number;
    keyword?: string;
  };
}

const BASE_URL = "https://panda-market-api.vercel.app";

export async function getAllProduct({ query }: Query) {
  const { currentPage, order, size, keyword } = query;
  const response = await fetch(
    `${BASE_URL}/products?page=${currentPage}&orderBy=${order}&pageSize=${size}&keyword=${keyword}`
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는 중 에러가 발생했습니다.");
  }
  const data = await response.json();
  return data;
}

export async function getFavoriteProduct({ query }: Query) {
  const { size } = query;
  const response = await fetch(
    `${BASE_URL}/products?&orderBy=favorite&pageSize=${size}`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("데이터를 불러오는 중 에러가 발생했습니다.");
  }
  return data;
}

export async function getProductDetail(id: number) {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("상품 불러오기 실패");
  } else {
    const productData = await response.json();
    return productData;
  }
}

export async function getCommentList(id: number) {
  const response = await fetch(`${BASE_URL}/products/${id}/comments?limit=10`);
  if (!response.ok) {
    throw new Error("댓글 불러오기 실패");
  }
  const { list } = await response.json();
  return list;
}
