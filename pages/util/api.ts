import axios from "@/lib/axios";

export async function getArticles(
  page: number,
  pageSize: number,
  orderBy: string
) {
  const response = await axios.get(
    `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
  );
  const body = response.data.list ?? [];

  return body;
}
