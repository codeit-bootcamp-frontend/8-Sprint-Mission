import Article from "@/DTO/article";

export default interface Articles {
  totalCount: number;
  list: Article[];
}