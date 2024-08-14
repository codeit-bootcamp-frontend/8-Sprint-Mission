import axios from "@/lib/axios";
import { ArticleQuery } from "@/types/article";
import { ArticleResponse } from "@/types/article";

export const getArticleList = async ({
  page = 1,
  pageSize = 5,
  orderBy = "recent",
  keyword,
}: ArticleQuery) => {
  const res = await axios.get(
    `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${
      keyword ? `&keyword=${keyword}` : ""
    }`
  );
  const { list, totalCount }: ArticleResponse = res.data;
  return { list, totalCount };
};
