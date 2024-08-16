import axios from "@/lib/axios";

interface queryProps {
  query: {
    orderBy?: "recent" | "like";
    keyword?: string;
    pageSize?: string | number;
    page?: number;
  };
}

export async function getPostList({ query }: queryProps) {
  const { orderBy, keyword, pageSize, page } = query;
  const res = await axios.get(
    `/articles?orderBy=${orderBy}&keyword=${keyword ?? ""}&pageSize=${
      pageSize ?? 6
    }&page=${page ?? 1}`
  );
  const postList = res.data;
  return postList;
}
