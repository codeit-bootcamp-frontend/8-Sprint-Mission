import instance from "@/lib/axios";
import { API_PATH } from "@/lib/path";

export async function fetchProductDataById(productId: string) {
  const response = await instance.get(API_PATH.productsWithId(productId));
  console.log(response);
  return response.data ?? [];
}

export async function fetchProductComment(productId: string, limit: number) {
  const response = await instance.get(
    API_PATH.productsComments(productId, limit),
  );

  return response.data ?? [];
}
