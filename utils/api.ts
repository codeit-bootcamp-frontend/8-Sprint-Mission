import axios from "@/lib/axios";

interface queryProps {
  query: {
    orderBy?: string | string[] | undefined;
    keyword?: string | number;
    pageSize?: string | number;
  };
}

export async function getPostList({ query }: queryProps) {
  const { orderBy, keyword, pageSize } = query;
  const res = await axios.get(
    `/articles?orderBy=${orderBy ?? "recent"}&keyword=${
      keyword ?? ""
    }&pageSize=${pageSize ?? 10}`
  );
  const postList = res.data.list;
  return postList;
}
