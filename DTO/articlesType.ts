import Article from "@/DTO/article";

export default interface ArticlesType {
  totalCount: number;
  list: Article[];
}