import ArticleType from "@/DTO/article";

export default interface ArticlesType {
  totalCount: number;
  list: ArticleType[];
}