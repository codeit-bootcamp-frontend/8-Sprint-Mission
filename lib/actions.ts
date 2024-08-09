import axios from "axios";
import { GetProductsContext } from "./definitions";

export const fetchProducts = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/products`,
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getProducts({ queries, signal }: GetProductsContext) {
  try {
    const response = await fetchProducts({
      params: { ...queries },
      signal,
    });
    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("에러 발생 >>> ", error);
    return new Promise(reject => reject(error));
  }
}
