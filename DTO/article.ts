export default interface Article {
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