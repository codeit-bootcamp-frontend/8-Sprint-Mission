import { ItemsApi, ProductsApi } from "src/types/type";

const BASE_URL = `https://panda-market-api.vercel.app`;

export const getProduct = async (id: number) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error("getProduct 요청에 실패했습니다.");
  }
  const result: ProductsApi = await response.json();
  return result;
};

export interface QueryType {
  page: number;
  pageSize: number;
  orderBy: string;
  keyword: number;
}

export const getItems = async ({
  page,
  pageSize,
  orderBy,
  keyword,
}: QueryType) => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
  );
  if (!response.ok) {
    throw new Error("getItems 요청에 실패했습니다.");
  }
  const result: ItemsApi = await response.json();
  return result;
};
