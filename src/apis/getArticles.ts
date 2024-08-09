import instance from "./instance";

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
  createdAt: Date;
  updatedAt: Date;
}

interface GetArticlesProps {
  page?: number;
  pageSize: number;
  orderBy: "like" | "recent";
}

export default async function getArticles({
  page = 1,
  pageSize,
  orderBy = "recent",
}: GetArticlesProps) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const res = await instance.get(`/articles?${query}`);
  const { list, totalCount } = res.data;

  // 예외 처리 및 에러 처리 필요
  return { list, totalCount };
}
