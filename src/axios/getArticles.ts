import axiosInstance from "./instance";

interface Writer {
  id: number;
  nickname: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  writer: Writer;
  createdAt: string;
  updatedAt: string;
}

export type orderOption = "like" | "recent";

interface GetArticlesProps {
  page?: number;
  pageSize: number;
  orderBy?: orderOption;
  keyword?: string;
}

interface Response {
  list: Article[];
  totalCount: number;
}

export default async function getArticles({
  page = 1,
  pageSize,
  orderBy = "recent",
  keyword = "",
}: GetArticlesProps) {
  let query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  if (keyword) {
    query += `&keyword=${keyword}`;
  }
  const res = await axiosInstance.get(`/articles?${query}`);
  const { list, totalCount }: Response = res.data;

  // 예외 처리 및 에러 처리 필요
  return { list, totalCount };
}
