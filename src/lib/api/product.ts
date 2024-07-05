import { ProductDetailParams } from "core/Interface/Product";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const productUrl = BASE_URL + "products";

interface GetProductArgs {
  currentPage?: number;
  pageSize?: number;
  orderBy?: string;
  searchKeyword?: string;
}

interface PostProductParams {
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
}

export const fetchGetProduct = async ({
  currentPage = 1,
  pageSize = 10,
  orderBy = "recent",
  searchKeyword = "",
}: GetProductArgs) => {
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
  const body = await response.json();
  return body;
};

export const fetchPostProduct = async (params: PostProductParams) => {
  const response = await fetch(productUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(params),
  });
  if (!response.ok) {
    throw new Error("데이터를 업로드하는데 실패하였습니다.");
  }
  const body = await response.json();
  return body;
};

export const fetchGetProductDetail = async ({
  productId,
}: ProductDetailParams) => {
  const response = await fetch(productUrl + `/${productId}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("상세 정보를 가져오는데 실패하였습니다.");
  }
  const body = await response.json();
  return body;
};

export interface ProductDetailCommentParams extends ProductDetailParams {
  limit: number;
  cursor: number | null;
}

export const fetchProductComment = async ({
  productId,
  limit,
  cursor,
}: ProductDetailCommentParams) => {
  const url =
    productUrl +
    `/${productId}/comments?limit=${limit}${cursor ? `&cursor=${cursor}` : ""}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("댓글을 불러오는데 실패하였습니다.");
  }
  const body = await response.json();
  return body;
};
