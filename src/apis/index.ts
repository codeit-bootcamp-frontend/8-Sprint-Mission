const BASE_URL = import.meta.env.VITE_API_URL;

interface GetItemListArg {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string | null;
}

export const getItemList = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = null,
}: GetItemListArg) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${keyword ? `&keyword=${keyword}` : ""}`,
    );
    const itemList = await response.json();
    return itemList;
  } catch (err) {
    console.log(err);
  }
};
