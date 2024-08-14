export default interface ArticleType {
  id: number
  title: string;
  content: string;
  image: string;
  writer: {
    nickname: string;
    id: number;
  }
  likeCount: number;
  createdAt: string;
  updatedAt: string;
}